import React from 'react';

import PropTypes from 'prop-types';

import { List, DatePicker, ImagePicker } from 'antd-mobile';
import { intoInfoEditPage } from "../../routes/route";
import { pageInfo } from "../../constants/pageInfo";
import { updateUserInfo } from "../../services/api";

const Item = List.Item;

class Index extends React.Component {

    render() {

        let { userInfo, browserHistory } = this.props;

        return (
            <div>
                <List>
                    <Item extra={<img src={userInfo.url} style={{height: 50, width: 50, borderRadius: 50}}/>} arrow="horizontal" onClick={() => {<input type='file' accept='image/*'/>}}>头像</Item>
                    <Item extra={userInfo.userName} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditName, userInfo.userName)}>用户名</Item>
                    <Item extra={userInfo.sex} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditSex, userInfo.sex)}>性别</Item>
                    <Item extra={userInfo.mobile} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditMobile, userInfo.mobile)}>电话</Item>
                    <DatePicker
                        mode="date"
                        title="选择日期"
                        extra="生日"
                        minDate={new Date('1900-01-01')}
                        maxDate={new Date()}
                        value={new Date(userInfo.birthday)}
                        onChange={date => updateUserInfo(pageInfo.EditBirthday.code, date)}
                    >
                        <List.Item arrow="horizontal">生日</List.Item>
                    </DatePicker>
                    <Item extra={userInfo.email} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditMail, userInfo.email)}>邮件</Item>
                    <Item extra={userInfo.address} arrow="horizontal" onClick={() => intoInfoEditPage(browserHistory, pageInfo.EditAddress, userInfo.address)}>住址</Item>
                </List>
            </div>
        );
    }
}

Index.propTypes = {
    browserHistory: PropTypes.object
};

export default Index;