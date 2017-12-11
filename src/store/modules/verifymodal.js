// import * as types from '../mutation-types';
import Api from '../../api/verifymodal';

const verifymodal = {
    state: {
        // list: []
    },
    getters: {
        // list: state => state.list
    },
    mutations: {
        // [types.GET_LIST] (state, data) {
        //     state.list = data;
        // }
    },
    actions: {
        getUserInfo ({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.getUserInfo(data).then(response => {
                    resolve(response);
                }).catch(error => {
                    reject(error);
                });
            });
        }
    }
};

export default verifymodal;
