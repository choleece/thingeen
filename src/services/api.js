import { Toast } from 'antd-mobile';

import request from '../utils/request';
import { dispatchAction } from "../actions/common";
import {UPDATE_USER_INFO} from "../constants/home";

export const updateUserInfo = (editCode, value, history) => {
    dispatchAction(UPDATE_USER_INFO)({[editCode]: value, editCode});
    history && history.goBack();
    Toast.success('successfully');
}