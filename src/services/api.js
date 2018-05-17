import { Toast } from 'antd-mobile';

import request from '../utils/request';
import { dispatchAction } from "../actions/common";
import {UPDATE_USER_INFO} from "../constants/home";

export const updateUserInfo = (history, editCode, value) => {
    dispatchAction(UPDATE_USER_INFO)({[editCode]: value, editCode});
    history.goBack();
    Toast.success('update successfully......');
}