import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';

const ConferenceRegistration = () => {
    const lineId = document.cookie.replace(/(?:(?:^|.*;\s*)lineIdToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    const cookieId = document.cookie.replace(/(?:(?:^|.*;\s*)cookieId\s*=\s*([^;]*).*$)|^.*$/, '$1');
    let [caseData, setCaseData] = useState({ name: null, id: null }),
        [state, setState] = useState(null) //狀態(接 API Response data)

    let caseList = [
        { id: '001', name: '新年快樂' }
    ]
    useEffect(() => {
        //抓課程 id
        var getUrlString = window.location.href;
        var url = new URL(getUrlString);
        let caseId = url.hash.split('#')[1].split('?')[1].split('=')[1]

        sessionStorage.setItem('sessionCaseId', caseId)
        localStorage.setItem('localCaseId', caseId)
        document.cookie = `cookieId=${caseId};`;
        //抓 line id
        if (lineId === '' || lineId === null || lineId === undefined) {
            setTimeout(() => {
                window.location.href = 'https://chennalhua.github.io/lineLogin/#/'
            }, 3000)
            return
        } else if (caseId == null || caseId == 'null' || caseId == '' || caseId == undefined) {
            setState('抓 ID 錯誤 !!')
            return
        } else {
            caseList.map((item, index) => {
                if (cookieId == item.id) {
                    setCaseData({ name: item.name, id: item.id })
                }
            })
        }
    }, [])
    useEffect(() => { }, [state])
    useEffect(() => { }, [])

    let style = {
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%'
    }
    return (
        <>
            <div style={{ style }}>
                <p>{window.location.href}</p>
                <ul style={{ fontSize: '18px' }}>
                    <li>cookies：{cookieId}</li>
                    <li>localStorage：{localStorage.getItem('localCaseId')}</li>
                    <li>sessionStorage：{sessionStorage.getItem('sessionCaseId')}</li>
                </ul>
                <div style={{ textAlign: 'center', fontSize: '20px' }}>{state}</div>
                <div style={{ textAlign: 'center', fontSize: '20px' }}>{caseData.name}</div>
            </div>
        </>
    );
};

export default ConferenceRegistration