import { request } from '@/network/request';

export function sendLoginData(un, pw) {
    return request({
        method: 'post',
        url: '/login',
        data: {
            username: un,
            password: pw
        }
    });
}