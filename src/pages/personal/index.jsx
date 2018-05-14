import React from 'react';

import PropTypes from 'prop-types';

import { List, Toast, DatePicker, ImagePicker } from 'antd-mobile';
import {intoInfoEditPage} from "../../routes/route";
import {pageInfo} from "../../constants/pageInfo";

const Item = List.Item;

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            config: {},
            date: new Date(),
            sex: 'M',
            clicked: 'none'
        };
    }

    render() {
        return (
            <div>
                <List>
                    <Item extra={<img src='https://unsplash.it/250/305?image=883' style={{height: 50, width: 50, borderRadius: 50}}/>} arrow="horizontal" onClick={() => {<input type='file' accept='image/*'/>}}>头像</Item>
                    <Item extra="choleece" arrow="horizontal" onClick={() => intoInfoEditPage(this, pageInfo.EditName, 'choleece')}>用户名</Item>
                    <Item extra="男" arrow="horizontal" onClick={() => intoInfoEditPage(this, pageInfo.EditSex, 'M')}>性别</Item>
                    <Item extra="17506482818" arrow="horizontal" onClick={() => intoInfoEditPage(this, pageInfo.EditMobile, '15764236208')}>电话</Item>
                    <DatePicker
                        mode="date"
                        title="选择日期"
                        extra="生日"
                        value={this.state.date}
                        onChange={date => this.setState({ date })}
                    >
                        <List.Item arrow="horizontal">生日</List.Item>
                    </DatePicker>
                    <Item extra="choleece@healai.com" arrow="horizontal" onClick={() => intoInfoEditPage(this, pageInfo.EditMail, 'choleece@healai.com')}>邮件</Item>
                    <Item extra="山东省青岛市李沧区5单元1号" arrow="horizontal" onClick={() => intoInfoEditPage(this, pageInfo.EditAddress, '山东省青岛市李沧区')}>住址</Item>
                </List>
            </div>
        );
    }
}

Index.propTypes = {
    browserHistory: PropTypes.object
};

export default Index;