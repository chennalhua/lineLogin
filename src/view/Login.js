import React, { useEffect, useState } from 'react';
import { Link, useRouteMatch, Switch, Route, useLocation, useHistory } from "react-router-dom";

//from
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import randomBytes from "randombytes"

import { default as swal } from 'sweetalert2'

// import goldennetLogo from "../assets/images/goldennet_logo.svg";

import axios from 'axios';
import url from 'url';
import qs from 'qs';
import jwt from 'jsonwebtoken';

const LineLogin = () => {
    // let decode = JSON.parse(decodeURIComponent(localStorage.getItem("ss"))); //解碼
    let [lineId, setLineId] = useState('');
    const state = randomBytes(32).toString('hex');
    const nonce = randomBytes(32).toString('hex');

    let LINE_CHANNEL_SECRET = "8664461fb88612dbf7ab59d5721aea3a"
    let LINE_CHANNEL_ID = "1656692096"
    // let CALLBACK_URL = 'http://localhost:3000/'
    let CALLBACK_URL = 'https://chennalhua.github.io/lineLogin/'

    const lineLogin = () => {
        let link = 'https://access.line.me/oauth2/v2.1/authorize?';
        link += 'response_type=code';
        link += `&client_id=${LINE_CHANNEL_ID}`;
        link += `&redirect_uri=${CALLBACK_URL}`;
        link += `&state=${state}`;
        link += `&nonce=${nonce}`;
        link += '&scope=openid%20profile';
        link += '&prompt=consent';
        link += '&bot_prompt=normal';
        // link += `&max_age=241000`; 登入後的有效時間
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
    }, []);

    const getAccessToken = (callbackURL) => {
        var urlParts = url.parse(callbackURL, true);
        var query = urlParts.query;
        console.log(query)
        var hasCodeProperty = Object.prototype.hasOwnProperty.call(query, 'code');
        if (hasCodeProperty) {
            const reqBody = {
                grant_type: 'authorization_code',
                code: query.code,
                redirect_uri: `${CALLBACK_URL}`,
                client_id: `${LINE_CHANNEL_ID}`,
                client_secret: `${LINE_CHANNEL_SECRET}`
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
                        const decodedIdToken = jwt.verify(res.data.id_token, `${LINE_CHANNEL_SECRET}`, {
                            algorithms: ['HS256'],
                            audience: `${LINE_CHANNEL_ID}`.toString(),
                            issuer: 'https://access.line.me',
                            // nonce: `${newId}`
                        });
                        setLineId(decodedIdToken.sub)
                        localStorage.setItem("test", encodeURI(JSON.stringify(decodedIdToken.sub)));
                        // setLineUserID(decodedIdToken.sub)

                        // if (setIdToken) setIdToken(decodedIdToken);
                    } catch (err) {
                        // If token is invalid.
                        console.log(err);
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        } else if (query.error) {
            swal.fire({
                icon: 'error',
                title: '登入失敗',
                text: '需登入授權，才能轉換升級 iSmart +',
                confirmButtonText: '重新登入',
            }).then(function () {
                lineLogin()
            })
        }
    };

    useEffect(() => {
        getAccessToken(window.location.href)
    }, []);

    const validationSchema = Yup.object().shape({
        uid: Yup.string()
            .required('請正確輸入帳號'),
        // .email('Email is invalid'),
        pwd: Yup.string()
            // .min(6, 'Password must be at least 6 characters')
            .required('請正確輸入密碼'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    let [showData, setShowData] = useState({})
    let [loadingBtn, setLoadingBtn] = useState(false)
    const onSubmit = (data) => {
        setEye(true);
        data = { ...data, LineId: lineId }
        let API = `https://ismart2.goldennet.com.tw/LineLogin/UpdateLineId`
        setShowData(data)
        console.log(data)
        axios.put(API, data)
            .then((res) => {
                setLoadingBtn(true)
                if (res.data.ResponseCode === '0') {
                    setLoadingBtn(false)
                    swal.fire({
                        icon: 'success',
                        title: '!!恭喜您!!',
                        text: '已經順利轉換為 iSmart + 金頭腦帳號',
                        confirmButtonText: '太好了',
                    })
                    reset();
                } else if (res.data.ResponseCode === '1') {
                    setLoadingBtn(false)
                    swal.fire({
                        icon: 'info',
                        title: '您已成功轉換過囉~',
                        text: '無須再次登入轉換囉!敬請期待 iSmart + 金頭腦',
                        confirmButtonText: '沒問題',
                    })
                    reset();
                } else if (res.data.ResponseCode === '2') {
                    setLoadingBtn(false)
                    swal.fire({
                        icon: 'error',
                        title: '轉換失敗 ><',
                        text: '請先確認帳號密碼是否正確。如還轉換失敗請聯繫 eGolden_support 團隊進行協助',
                        confirmButtonText: '好的',
                    })
                }
            })
            .catch((err) => {
                console.log(err)
                reset();
            })
    }

    //密碼眼睛
    let [eye, setEye] = useState(true);
    const handleEyeClick = () => {
        if (eye) {
            setEye(false);
        } else {
            setEye(true);
        }
    }

    useEffect(() => {

    }, [showData]);

    return (
        <div>
            {/* <BackgroundWrapper> */}
            <div className="container-fluid bg-mask vh-100">
                <div className="container">
                    <button type="button" onClick={lineLogin}>click</button>
                    {/* <div className="text-center py-5"><img src={goldennetLogo} className="img-fluid" alt="Golden-LOGO" width="300px" /></div> */}
                    <h4 className="text-center fw-bolder text-golden-brown">iSmart 升級金頭腦登入</h4>
                    <div className="d-flex justify-content-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="col-12 col-md-6 col-lg-4">
                            <div className="form-group my-3">
                                <label htmlFor="uid" className="fw-bolder text-golden-brown">請輸入《業管系統》帳號</label>
                                <input id="uid" name="uid" type="text" {...register('uid')} className={`form-control ${errors.uid ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.uid?.message}</div>
                            </div>
                            <div className="form-group my-3 position-relative">
                                <label htmlFor="pwd" className="fw-bolder text-golden-brown">請輸入《業管系統》密碼</label>
                                <input id="pwd" name="pwd" type={eye ? 'password' : 'text'} className={`form-control ${errors.pwd ? 'is-invalid' : ''}`}
                                    {...register('pwd')}
                                />
                                <div className="invalid-feedback">{errors.pwd?.message}</div>
                            </div>
                            <button type="submit" className="btn btn-golden-brown w-100 mt-3" disabled={loadingBtn ? 'disabled' : ''}>
                                登入
                            </button>
                            {/* <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button> */}
                        </form>
                        {
                            JSON.stringify(showData)
                        }
                    </div>
                </div>
            </div>
            {/* </BackgroundWrapper> */}
        </div>
    );
};

export default LineLogin