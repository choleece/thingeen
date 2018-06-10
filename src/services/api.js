import { Toast } from 'antd-mobile';

import request from '../utils/request';
import { dispatchAction } from "../actions/common";
import { UPDATE_USER_INFO, INIT_USER_INFO } from "../constants/home";
import {config, http_code} from '../constants/config';

export const login = (userName, passWord) => history => {
    Toast.loading("登录中...");
    request(`${config.server_url}/sys/login.do?userName=${userName}&passWord=${passWord}`, {method: 'POST'}).then(res => {
        if (res.data.syscode === http_code.SYS_200) {
            history.push('/app');
            console.log('登录成功');
        } else {
            history.push('/app');
            Toast.fail(res.data.message);
        }
    })
}

export const updateUserInfo = (editCode, value, history) => {
    dispatchAction(UPDATE_USER_INFO)({[editCode]: value, editCode});
    history && history.goBack();
    Toast.success('successfully');
}

export const getUserInfo = () => {
    request(`${config.server_url}/user/myInfo.do`).then(res => {
        let data = res.data;
        if (data.syscode === http_code.SYS_900) {
            console.log('提醒用户登录');
        } else if (data.syscode === http_code.SYS_200) {
            dispatchAction(INIT_USER_INFO)(data.data[0]);
            console.log(data.data);
        } else {
            console.log(data.message);
        }
    }).catch(err => {console.log(JSON.stringify(err));});
}