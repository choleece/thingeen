import React from 'react';

import { InputItem, Radio } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

import { parseUrl } from "../../utils/url";
import {pageInfo} from "../../constants/pageInfo";

class EditInfo extends React.Component {

    constructor(props) {
        super(props);
        this.queryObj = parseUrl(this.props.history.location.search);
        this.state = {
            value: this.queryObj.value,
            hasErr: false
        }
    }

    onChange = (value) => {
        this.setState({
            value
        });
    };

    renderInput = (code) => {
        switch(code) {
            case pageInfo.EditName.code:
                return <InputItem placeholder='输入您的用户名' maxLength={10} onChange={value => this.setState({value})} value={this.state.value}/>
            case pageInfo.EditMobile.code:
                return <InputItem type='phone' placeholder='输入您的手机号' error={this.state.hasErr} onChange={value => this.setState({value})} value={this.state.value}/>
            case pageInfo.EditMail.code:
                return <InputItem type='email' placeholder='输入您的邮箱' error={this.state.hasErr} onChange={value => this.setState({value})} value={this.state.value}/>
            case pageInfo.EditAddress.code:
                return <InputItem placeholder='输入您的地址' maxLength={30} onChange={value => this.setState({value})} value={this.state.value}/>
            case pageInfo.EditSex.code:
                return [{label: '男', value: 'M'}, {label: '女', value: 'F'}].map(i =>
                            <RadioItem key={i.value} checked={this.state.value === i.value} onClick={this.onChange.bind(this, i.value)}>
                                {i.label}
                            </RadioItem>
                        )
            default:
                return <div/>
        }
    }

    componentDidMount() {
        document.title = this.queryObj.title;
    }

    render() {
        return (
            <div>
                { this.renderInput(this.props.match.params.code) }
            </div>
        )
    }
}

export default EditInfo;