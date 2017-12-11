import * as types from '../mutation-types';
import Api from '../../api/loan';
import Mock from '@/mock';

const loan = {
    state: {
        list: []
    },
    getters: {
        list: state => state.list
    },
    mutations: {
        [types.GET_LIST] (state, data) {
            state.list = data;
        }
    },
    actions: {
        getList ({ commit }, data) {
            return new Promise((resolve, reject) => {
                Api.getList(data).then(response => {
                    // commit(types.GET_LIST, response);
                    resolve(response);
                }).catch(error => {
                    if (Mock.isOpen) {
                        resolve(Mock.loan.result);
                    } else {
                        reject(error);
                    }
                });
            });
        }
    }
};

export default loan;
