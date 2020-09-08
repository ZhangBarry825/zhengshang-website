import request from './request'

export function getTest (data) {
    return request({
        url: '/sys/user/login',
        method: 'get',
        params: data
    })
}

export function postTest (data) {
    return request({
        url: '/sys/user/login',
        method: 'post',
        data
    })
}


// 底部信息
export function bottomIn (data) {
    return request({
        url: '/index/footer/get_config',
        method: 'get',
        params: data
    })
}
// 首页
export function homeapi (data) {
    return request({
        url: '/index/index/index',
        method: 'get',
        params: data
    })
}
// 业务领域
export function Businessapi (data) {
    return request({
        url: '/index/business/index',
        method: 'get',
        params: data
    })
}
// 关于我们
export function aboutUsapi (data) {
    return request({
        url: '/index/about/index',
        method: 'get',
        params: data
    })
}

// 客户案例-种类
export function categorysapi (data) {
    return request({
        url: '/index/customer/get_categorys',
        method: 'get',
        params: data
    })
}

// 客户案例-列表
export function Caseapi (data) {
    return request({
        url: '/index/customer/caselist',
        method: 'get',
        params: data
    })
}
// 客户案例-详情
export function detailsapi (data) {
    return request({
        url: '/index/customer/caseinfo',
        method: 'get',
        params: data
    })
}

// 新闻中心-种类
export function catenewsapi (data) {
    return request({
        url: '/index/news/get_categorys',
        method: 'get',
        params: data
    })
}
// 新闻中心-新闻列表
export function newslistapi (data) {
    return request({
        url: '/index/news/newslist',
        method: 'get',
        params: data
    })
}
// 新闻中心-新闻详情
export function newsinfoapi (data) {
    return request({
        url: '/index/news/newsinfo',
        method: 'get',
        params: data
    })
}
// 关于我们-项目需求
export function saveapi (data) {
    return request({
        url: '/index/contact/save',
        method: 'get',
        params: data
    })
}
// 政务云-轮播
export function cloudapi (data) {
    return request({
        url: '/index/cloud/get_carousel',
        method: 'get',
        params: data
    })
}









