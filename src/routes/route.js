/**
 * 跳转到琴行详情页
 * @param ctx 上下文
 * @param oOrganization 琴行ID
 */
export const intoHarmDetailPage = (ctx, oOrganization) => {

    let { browserHistory } = ctx.props;

    browserHistory.push(`/harm/${oOrganization}`);
};

/**
 * 跳转到基本信息修改页
 * @param ctx
 * @param pageInfo
 * @param value
 */
export const intoInfoEditPage = (ctx, pageInfo, value) => {
    let { browserHistory } = ctx.props;

    browserHistory.push(`/personal/${pageInfo.code}?title=${pageInfo.title}&value=${value}`);
}