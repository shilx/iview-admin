import fetch from '../libs/fetch';

export default {
    getList: (data) => {
        return fetch({
            url: '/api/account/list',
            method: 'post',
            data
        });
    }
    // getBidding: (page) => {
    //     const data = {
    //         currentPage: page
    //     };

    //     return fetch({
    //         url: '/api/mineInvest/bidding.do',
    //         method: 'post',
    //         data: data
    //     });
    // },
    // getFinish: (page) => {
    //     const data = {
    //         currentPage: page
    //     };

    //     return fetch({
    //         url: '/api/mineInvest/finish.do',
    //         method: 'post',
    //         data: data
    //     });
    // },
    // getDeal: (page) => {
    //     const data = {
    //         currentPage: page
    //     };

    //     return fetch({
    //         url: '/api/mineInvest/needToDeal.do',
    //         method: 'post',
    //         data: data
    //     });
    // },
    // getMyBadges: () => {
    //     return fetch({
    //         url: '/api/mineInvest/listNum.do',
    //         method: 'post'
    //     });
    // },
    // getLoanerInfo: (id) => {
    //     return fetch({
    //         url: '/api/mineInvest/lenderDatails.do',
    //         method: 'post',
    //         data: {
    //             loanId: id
    //         }
    //     });
    // },
    // getAdvanceCollectList: (loanIdList) => {
    //     return fetch({
    //         url: '/api/mineInvest/advanceCollectList.do',
    //         method: 'post',
    //         data: {
    //             tiqianLoanIdList: loanIdList
    //         }
    //     });
    // },
    // getAdvanceRepayData: (loanId) => {
    //     return fetch({
    //         url: '/user/lends/deal/advanceRepayData.do',
    //         method: 'post',
    //         data: {
    //             loanId
    //         }
    //     });
    // },
    // getRenewData: (loanId) => {
    //     return fetch({
    //         url: '/user/lends/deal/renewData.do',
    //         method: 'post',
    //         data: {
    //             loanId
    //         }
    //     });
    // },
    // postdealAdvanceCollectList: (data) => {
    //     return fetch({
    //         url: '/api/mineInvest/dealAdvanceCollectList.do',
    //         method: 'post',
    //         data: {
    //             tiqianLoanIdList: data.loanIdList,
    //             reason: data.text,
    //             deadline: data.time
    //         }
    //     });
    // },
    // getContract: (loanId) => {
    //     return fetch({
    //         url: '/user/lends/contracts.do',
    //         method: 'post',
    //         data: {
    //             loanId: loanId
    //         }
    //     });
    // },
    // getLatestRate: (loanId) => {
    //     return fetch({
    //         url: '/api/mineInvest/getLatestRate.do',
    //         method: 'post',
    //         data: {
    //             loanId: loanId
    //         }
    //     });
    // }
};
