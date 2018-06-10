/**
 * Created by choleece on 2018/6/7.
 */
import React from 'react';

import { InputItem, Button, WingBlank, WhiteSpace } from 'antd-mobile';

import {isMobile, isStrEmpty } from "../utils/util";
import { login } from "../services/api";
import { screenInfo } from "../constants/constant";

export default class Login extends React.Component {

    state = {
        mobile: '',
        password: '',
        mobileErr: false
    }

    onChange = (value) => {
        if (value.replace(/\s/g, '').length === 11) {
            this.setState({mobile: value.replace(/\s/g, ''), mobileErr: !isMobile(value.replace(/\s/g, ''))});
        } else {
            this.setState({mobile: value.replace(/\s/g, ''), mobileErr: false});
        }

    }

    render() {
        return (
            <WingBlank size='lg'>
                <div style={{height: screenInfo().height, paddingTop: 150}}>
                    <InputItem type="phone" placeholder="手机号" error={this.state.mobileErr} onChange={value => {this.onChange(value);}} value={this.state.mobile}/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <InputItem type="password" placeholder="密码" onChange={value => this.setState({ password: value })}/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button type="primary" onClick={() => login(this.state.mobile, this.state.password)(this.props.history)} disabled={!isMobile(this.state.mobile.replace(/\s/g, '')) || isStrEmpty(this.state.password)}>登录</Button>
                </div>
            </WingBlank>
        )
    }
}