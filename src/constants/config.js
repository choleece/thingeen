// const ip = 'http://192.168.8.150:8870';

const ip = 'https://www.brotech.club/userBiz';

export const config = {
    server_url: `${ip}`
};

/**
 * http 返回状态码
 * @type {{SYS_200: string, SYS_400: string, SYS_500: string, SYS_700: string, SYS_900: string}}
 */
export const http_code = {
    SYS_200: 'SYS_200',
    SYS_400: 'SYS_400',
    SYS_500: 'SYS_500',
    SYS_700: 'SYS_700',
    SYS_900: 'SYS_900'
};

/**
 * 服务器连接信息
 * @type {{TIME_OUT: string}}
 */
export const http_msg = {
    TIME_OUT: '网络链接超时...'
}