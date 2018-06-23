import React from 'react';

import PropTypes from 'prop-types';

import { List, DatePicker, ImagePicker } from 'antd-mobile';
import { intoInfoEditPage } from "../../routes/route";
import { pageInfo } from "../../constants/pageInfo";
import {getUserInfo, updateUserInfo} from "../../services/api";

const Item = List.Item;

class Index extends React.Component {

    render() {

        let { userInfo, browserHistory } = this.props;

        return (
            <div>
                <div className='avatar-bg'>
                    <div className='flex-row-a-c'>
                        <img src={userInfo.userPic} className='avatar'/>
                        <div className='flex-column-j-c' style={{marginLeft: 20, fontSize: 20, color: '#fff', fontWeight: 'bold'}}>{userInfo.userName}</div>
                    </div>
                </div>
                <List>
                    <Item extra={userInfo.userName} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditName, userInfo.userName)}>用户名</Item>
                    <Item extra={userInfo.userGender === 1 ? '男' : '女'} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditSex, userInfo.sex)}>性别</Item>
                    <Item extra={userInfo.userMobile} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditMobile, userInfo.mobile)}>电话</Item>
                    <DatePicker
                        mode="date"
                        title="选择日期"
                        extra="生日"
                        minDate={new Date('1900-01-01')}
                        maxDate={new Date()}
                        value={new Date(userInfo.userBirthday)}
                        onChange={date => updateUserInfo(pageInfo.EditBirthday.code, date)}
                    >
                        <List.Item arrow="horizontal">生日</List.Item>
                    </DatePicker>
                    <Item extra={userInfo.userMail} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditMail, userInfo.email)}>邮件</Item>
                    <Item extra={userInfo.userAddress} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditAddress, userInfo.address)}>住址</Item>
                </List>
            </div>
        );
    }

    componentDidMount() {
        getUserInfo()(this.props.browserHistory);
    }
}

Index.propTypes = {
    browserHistory: PropTypes.object
};

export default Index;