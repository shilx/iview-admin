function createRoute (route) {
    return resolve => require(['@/htt/' + route], resolve);
}

export default createRoute;
