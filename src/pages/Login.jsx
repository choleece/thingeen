/**
 * Created by choleece on 2018/6/7.
 */
import React from 'react';

import { Button, WingBlank, WhiteSpace, InputItem } from 'antd-mobile';

import { Link } from 'react-router-dom';

import { isMobile, isStrEmpty } from "../utils/util";
import { login } from "../services/api";
import { screenInfo } from "../constants/constant";

import logo from '../assets/images/LOGO.png';

import PropTypes from 'prop-types';
import lg from "../utils/log";

export default class Login extends React.Component {

    state = {
        mobile: '',
        password: '',
        mobileErr: false
    }

    onChange = (name, value) => {
        lg('input on change', {'value': value, 'name': name})
        if (name === 'mobile') {
            if (value.replace(/\s/g, '').length === 11) {

            }
        } else {
            this.setState({
                [name]: value.replace(/\s/g, '')
            })
        }
    }

    render() {
        return (
            <WingBlank size='lg'>
                <div>
                    <div className="flex-row-a-j-c">
                        <img src={logo} style={{height: 26, width: 91, marginTop: 168}}/>
                    </div>
                    <div className="flex-row-a-j-c" style={{fontSize: 17, color: '#00BAFF', fontWeight: 'MicrosoftYaHei', marginTop: 10, marginBottom: 90}}>行音科技</div>
                    <Input placeholder='手机号' type='number' handleChange={this.onChange.bind(this)} name='mobile' value={this.state.mobile}/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Input placeholder='密码' type='password' handleChange={this.onChange.bind(this)} name='password' value={this.state.password}/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <Button style={{backgroundColor: '#00BAFF'}} type="primary" onClick={() => login(this.state.mobile, this.state.password)(this.props.history)} disabled={!isMobile(this.state.mobile.replace(/\s/g, '')) || isStrEmpty(this.state.password)}>登录</Button>
                </div>
                <div style={{marginTop: 100}}>
                    <div className='flex-row-a-j-c'><Link to='/'><span style={{textDecoration: 'underline', color: '#AEB4BB', fontSize: 12}}>忘记密码</span></Link></div>
                    <div className='flex-row-a-j-c' style={{color: '#C8CED2', fontSize: 12, marginTop: 20}}>还没有账号?<Link to='/'><span style={{textDecoration: 'underline', color: '#AEB4BB', fontSize: 12}}>马上注册</span></Link></div>
                </div>
            </WingBlank>
        )
    }
}

function Input({ placeholder, type, handleChange, name, value }) {
    return (
        <div style={{borderBottom: '1px solid #f0f0f0', paddingBottom: 5}} className='flex-row-a-j-c'>
            <div className='flex-column-a-j-c' style={{marginRight: 15}}>
                <img src={logo} style={{height: 14, width: 15}}/>
            </div>
            <input style={{width: '100%'}} placeholder={placeholder} type={type} onChange={(e) => {handleChange(name, e.target.value);}} value={value}/>
        </div>
    )
};

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    handleChange: PropTypes.func,
    value: PropTypes.string
};