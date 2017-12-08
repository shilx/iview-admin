import * as types from '../mutation-types';
import Api from '../../api/loan';
import loanMock from './mock/loan.json';

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
                    // reject(error);
                    console.error(error);
                    console.log('使用mock data');
                    resolve(loanMock.result);
                });
            });
        }
    }
};

export default loan;
