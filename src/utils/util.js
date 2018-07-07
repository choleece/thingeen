/**
 * 判断字符串是否为空
 * @param str
 * @returns {boolean}
 */
export const isStrEmpty = str => {
    return str === undefined || str === '' || str === null || str === 'undefined';
};

/* eslint no-useless-escape:0 */
const reg = /(((^https?:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)$/g;

export const isUrl = path => {
    return reg.test(path);
};

const mobileReg = /^1[3-9][0-9]{9}$/;

export const isMobile = mobile => {
    return mobileReg.test(mobile);
};

/**
 * 检查是否有登录，如果没有登录，则调整到登录页
 * @param props
 */
export const checkLogin = (history) => {
    const token = localStorage.getItem('token');
    if(!token){
        history.replace({pathname: '/login'});
    }
}

/**
 * 判断对象是否为空
 * @param obj
 * @returns {*}
 */
export const isObjEmpty = obj => {
    if (isStrEmpty(obj)) {
        return {};
    }
    return Object.keys(obj).length === 0;
};

/**
 * 解析obj
 * @param obj
 * @returns {{}}
 */
export const parseObj = obj => {
    if (obj === undefined || obj === '') {
        return {};
    } else if (obj instanceof Object) {
        return obj;
    }
    return JSON.parse(obj);
};