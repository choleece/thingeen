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
        oIntro: '琴行简介',
        oName: '琴行联系人',
        oAddress: '琴行地址',
        oPhone: '琴行固话',
        oDescribe: '琴行描述'
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
export const changeFocusStatus = organizationId => ctx => {
    console.log(`---change harm focus status api, follow or unfollow~organizationId: ${organizationId}`);
    ctx.setState({
        focusText: '关注'
    });
}