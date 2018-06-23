import React from 'react';

import { WingBlank, Button, ActionSheet } from 'antd-mobile';
import {changeFocusStatus, getFocusStatus, getHarmDetail} from "../../services/api";
import plus from '../../assets/images/plus.png';

/**
 * 琴行详情
 */
class HarmDetail extends React.Component {

    constructor(props) {
        super(props);
        this.organizetionId = this.props.match.params.id;
    }

    state = {
        oPic: '',
        oIntro: '',
        oName: '',
        oAddress: '',
        oPhone: '',
        oDescribe: '',
        focusLoading: true,
        focusText: ''
    }

    showUnfollowSheet = () => {
        const BUTTONS = ['取消关注', '取消'];
        ActionSheet.showActionSheetWithOptions({
            options: BUTTONS,
            cancelButtonIndex: BUTTONS.length - 1,
            title: '取消关注',
            maskClosable: true,
            'data-seed': 'logId'
        },
        (buttonIndex) => {
            console.log(buttonIndex);
            changeFocusStatus(this.organizetionId, true)(this);
        });
    }

    render() {

        let { oPic, oIntro, oName, oAddress, oPhone, oDescribe, focusLoading, focusText } = this.state;

        return (
            <WingBlank size='sm'>
                <Button icon={<img src={plus}/>} onClick={this.showUnfollowSheet} type="primary" inline size="small">{focusText}</Button>
                <img src={oPic} style={{width: '100%'}}/>
                <div>{oIntro}</div>
                <div>{oName}</div>
                <div>{oAddress}</div>
                <div>{oPhone}</div>
                <div>{oDescribe}</div>
            </WingBlank>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            getHarmDetail(this.organizetionId)(this);
            getFocusStatus(this.organizetionId)(this);
        }, 500)
    }
}

export default HarmDetail;