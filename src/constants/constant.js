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