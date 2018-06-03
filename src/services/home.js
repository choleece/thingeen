import {ADD_PAGE_INDEX, GEN_HARM_LIST} from "../constants/home";
import {batchedActions} from "../actions/batched";

/**
 * 获取关注列表
 * @param pageIndex
 * @param pageSize
 */
export const genFocusHarmList = (pageIndex = 0, pageSize = 10) => {
    console.log(`----gen data...pageIndex: ${pageIndex} pageSize: ${pageSize}`);
    let records = [];
    for (let i = (pageIndex - 1) * pageSize ; i < pageIndex * pageSize; i++) {
        records.push({fctime: '2018-01-01', fpic: 'https://unsplash.it/250/305?image=883', foname: '故事会', forganization: '1'});
    }
    batchedActions([{type: GEN_HARM_LIST, payload: records}, {type: ADD_PAGE_INDEX, payload: pageIndex}]);
};

/**
 * 获取琴行详情
 * @param organizationId
 */
export const getHarmDetail = organizationId => ctx => {
    console.log(`---get harm detail api~ organizationId: ${organizationId}`);
    ctx.setState({
        oPic: 'https://unsplash.it/250/305?image=883',
        oIntro: '雅马哈立式钢琴拥有丰富的样式，能够满足所有弹奏者的需求。无论是家庭练习用琴，还是专业院校的教育用琴，都深受广大用户的喜爱',
        oName: 'Cyber.Pan',
        oAddress: '北京市西二旗',
        oPhone: '010-59909999',
        oDescribe: '雅马哈还是一个经营音乐普及事业、网络产品、体育用品、厨房卫浴用品、发动机、贴片机等其他各种产品的综合性国际集团'
    });
};

/**
 * 获取琴行关注状态
 * @param organizationId
 */
export const getFocusStatus = organizationId => ctx => {
    console.log(`---get focus status api~ organizationId: ${organizationId}`);
    ctx.setState({
        focusLoading: false,
        focusText: '已关注'
    })
}

/**
 * 改变关注状态，关注与取消关注
 * @param organizationId
 */
export const changeFocusStatus = (organizationId, status) => ctx => {
    console.log(`---change harm focus status api, follow or unfollow~organizationId: ${organizationId}`);
    ctx.setState({
        focusText: status ? '关注' : '取消关注'
    });
}