import { Toast } from 'antd-mobile';

import {config, http_code, http_msg} from '../constants/config';

import request from '../utils/request';
import { dispatchAction } from "../actions/common";
import { UPDATE_USER_INFO, INIT_USER_INFO, ADD_PAGE_INDEX, GEN_HARM_LIST } from "../constants/home";
import { batchedActions } from "../actions/batched";
import log from '../utils/log';


export const login = (userName, passWord) => history => {
    Toast.loading("登录中...");
    request(`${config.server_url}/sys/login.do?userName=${userName}&passWord=${passWord}`, {method: 'POST'}).then(res => {
        if (res.data.syscode === http_code.SYS_200) {
            history.replace('/harm');
            Toast.success('登录成功');
        } else {
            Toast.fail(res.data.message);
        }
    }).catch(err => Toast.fail(http_msg.TIME_OUT));
}

/**
 * 更新用户信息
 * @param editCode
 * @param value
 * @param history
 */
export const updateUserInfo = (editCode, value, history) => {
    dispatchAction(UPDATE_USER_INFO)({[editCode]: value, editCode});
    history && history.goBack();
    Toast.success('successfully');
};

/**
 * 获取用户基本信息
 */
export const getUserInfo = () => history => {
    request(`${config.server_url}/user/myInfo.do`).then(res => {
        let data = res.data;
        if (data.syscode === http_code.SYS_900) {
            history.replace('/login');
        } else if (data.syscode === http_code.SYS_200) {
            dispatchAction(INIT_USER_INFO)(data.data[0]);
        } else {
            Toast.fail(res.data.message)
        }
    }).catch(err => Toast.fail(http_msg.TIME_OUT));
}

/**
 * 获取关注列表
 * @param pageIndex
 * @param pageSize
 */
export const genFocusHarmList = (pageIndex = 0, pageSize = 10) => history => ctx => {
    request(`${config.server_url}/focus/focusList.do?currentPage=1`).then(res => {
        console.log(JSON.stringify(res));
        if (res.data.syscode === http_code.SYS_200) {
            log('pageIndex')(pageIndex);
            log('pageSize')(pageSize);
            ctx.setState({
                hasMore: !res.data.currPage === res.data.totalPage
            });
            batchedActions([{type: GEN_HARM_LIST, payload: res.data.data}, {type: ADD_PAGE_INDEX, payload: res.data.currPage}]);
        } else if (res.data.syscode === http_code.SYS_900) {
            history.replace('/login');
        } else {
            Toast.fail(res.data.message)
        }
    }).catch(err => Toast.fail(http_msg.TIME_OUT));
};

/**
 * 获取琴行详情
 * @param organizationId
 */
export const getHarmDetail = organizationId => ctx => {
    log('---get harm detail api~ organizationId')(organizationId);
    ctx.setState({
        oPic: 'https://unsplash.it/250/305?image=883',
        oIntro: '雅马哈立式钢琴拥有丰富的样式，能够满足所有弹奏者的需求。无论是家庭练习用琴，还是专业院校的教育用琴，都深受广大用户的喜爱',
        oName: 'Cyber.Pan',
        oAddress: '北京市西二旗',
        oPhone: '010-59909999',
        oDescribe: '雅马哈还是一个经营音乐普及事业、网络产品、体育用品、厨房卫浴用品、发动机、贴片机等其他各种产品的综合性国际集团'
    });
};

/**
 * 获取琴行关注状态
 * @param organizationId
 */
export const getFocusStatus = organizationId => ctx => {
    console.log(`---get focus status api~ organizationId: ${organizationId}`);
    ctx.setState({
        focusLoading: false,
        focusText: '已关注'
    })
}

/**
 * 改变关注状态，关注与取消关注
 * @param organizationId
 */
export const changeFocusStatus = (organizationId, status) => ctx => {
    console.log(`---change harm focus status api, follow or unfollow~organizationId: ${organizationId}`);
    ctx.setState({
        focusText: status ? '关注' : '取消关注'
    });
}