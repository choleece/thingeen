/**
 * 判断字符串是否为空
 * @param str
 * @returns {boolean}
 */
export const isStrEmpty = str => {
    return str === undefined || str === '';
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
 * 判断一个对象是否为空
 * @param obj
 */
export const isObjEmpty = obj => {
    Object.keys(obj).every(item => { return isStrEmpty(obj[item]); })
}

/**
 * 返回屏幕信息
 * @returns {{width: Number, height: Number}}
 */
export const screenInfo = () => {
    return {
        width: window.screen.width,
        height: window.screen.height
    };
}

