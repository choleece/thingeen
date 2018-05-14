import QueryStringUtil from 'query-string';

/**
 * 获取URL？后面的参数
 * @param queryString
 */
export const parseUrl = (queryString) => {
    return QueryStringUtil.parse(queryString);
};