import React from 'react';

import { WingBlank } from 'antd-mobile';

/**
 * 琴行详情
 */
class HarmDetail extends React.Component {
    render() {
        return (
            <WingBlank size='sm'>
                <div>详情</div>
                <div>琴行简介oIntro</div>
                <div>琴行联系人oName</div>
                <div>琴行图片oPic</div>
                <div>琴行地址oAddress</div>
                <div>琴行固话oPhone</div>
                <div>琴行描述oDescribe</div>
            </WingBlank>
        );
    }
}

export default HarmDetail;