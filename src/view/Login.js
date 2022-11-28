import React, { useEffect, useState } from 'react';
import randomBytes from "randombytes"

import axios from 'axios';
import url from 'url';
import qs from 'qs';
import jwt from 'jsonwebtoken';

const Login = () => {
    const state = randomBytes(32).toString('hex');
    const nonce = randomBytes(32).toString('hex');

    const lineLogin = () => {
        let link = 'https://access.line.me/oauth2/v2.1/authorize?';
        link += 'response_type=code';
        link += `&client_id=${process.env.REACT_APP_LINE_LOGIN_CHANNEL_ID_TEST}`;
        link += `&redirect_uri=${process.env.REACT_APP_LINE_LOGIN_CALLBACK_URL_TEST}`;
        link += `&state=${state}`;
        link += `&nonce=${nonce}`;
        link += '&scope=openid%20profile';
        link += '&bot_prompt=normal';
        window.location.href = link;
    };
    useEffect(() => {
        var urlParts = url.parse(window.location.href, true);
        var query = urlParts.query;
        const isLogin = () => {
            if (Object.keys(query).length === 0) {
                lineLogin();
            }
        }
        isLogin()
    });

    const getAccessToken = (callbackURL) => {
        var urlParts = url.parse(callbackURL, true);
        var query = urlParts.query;
        var hasCodeProperty = Object.prototype.hasOwnProperty.call(query, 'code');
        if (hasCodeProperty) {
            const reqBody = {
                grant_type: 'authorization_code',
                code: query.code,
                redirect_uri: `${process.env.REACT_APP_LINE_LOGIN_CALLBACK_URL_TEST}`,
                client_id: `${process.env.REACT_APP_LINE_LOGIN_CHANNEL_ID_TEST}`,
                client_secret: `${process.env.REACT_APP_LINE_LOGIN_CHANNEL_SECRET_TEST}`
            };
            const reqConfig = {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            };
            axios
                .post(
                    'https://api.line.me/oauth2/v2.1/token',
                    qs.stringify(reqBody),
                    reqConfig
                )
                .then((res) => {
                    try {
                        const decodedIdToken = jwt.verify(res.data.id_token, `${process.env.REACT_APP_LINE_LOGIN_CHANNEL_SECRET_TEST}`, {
                            algorithms: ['HS256'],
                            audience: `${process.env.REACT_APP_LINE_LOGIN_CHANNEL_ID_TEST}`.toString(),
                            issuer: 'https://access.line.me',
                            // nonce: `${newId}`
                        });
                        document.cookie = `lineIdToken=${decodedIdToken.sub};`;
                        const cookieId = document.cookie.replace(/(?:(?:^|.*;\s*)cookieId\s*=\s*([^;]*).*$)|^.*$/, '$1');
                        setTimeout(() => { window.location.href = `https://chennalhua.github.io/lineLogin/#/page?id=${cookieId}` }, 1000);
                    } catch (err) {
                        // If token is invalid.
                        console.log(err);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (query.error) {
            alert('需「許可」授權，才能驗證登入')
        }
    };
    useEffect(() => {
        getAccessToken(window.location.href)
    }, []);
    return (
        <div>
            頁面導回中...
        </div>
    );
};

export default Login