import fetch from '../libs/fetch';

export default {
    getUserInfo: (data) => {
        return fetch({
            url: '/api/account/userView/',
            method: 'get',
            data
        });
    }
};
