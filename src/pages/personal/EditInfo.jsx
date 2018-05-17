import React from 'react';

import { InputItem, Radio, Button } from 'antd-mobile';

const RadioItem = Radio.RadioItem;

import { parseUrl } from "../../utils/url";
import { pageInfo } from "../../constants/pageInfo";

import { isStrEmpty } from "../../utils/util";

import '../../assets/styles/widget/buttom.less';
import { updateUserInfo } from "../../services/api";

class EditInfo extends React.Component {

    constructor(props) {
        super(props);
        this.queryObj = parseUrl(this.props.history.location.search);
        this.state = {
            value: '',
            hasErr: false
        }
        this.handleClick = this.handleClick.bind(this);
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
                <div style={{marginTop: 50, paddingLeft: '10%', paddingRight: '10%'}}>
                    <Button className={isStrEmpty(this.state.value) ? 'button' : 'button_active'} disabled={isStrEmpty(this.state.value)} onClick={this.handleClick.bind(this, this.props.match.params.code)}>提交</Button>
                </div>
            </div>
        )
    }

    handleClick = (editCode) => {
        updateUserInfo(this.props.history, editCode, this.state.value);
    }
}

export default EditInfo;