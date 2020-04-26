import resolve from 'resolve';
import {message} from 'antd';

const axios = require('axios');

const sendRequest = (url, params={}, method='GET') => {
    new Promise((resolve, reject) => {
        let promise
        const baseUrl = 'http://localhost:3002'
        url = `${baseUrl}${url}`
        switch(method) {
            case 'GET':
                promise = axios.get(url, {
                    params: params
                })
            case 'POST':
                promise = axios.post(url, {
                    params: params
                })
        }
        promise.then(response => {
            resolve(response)
        }).catch(error =>{
            // message.error(error.message)
        })
    })
}

export default sendRequest