import network from './network';

/**
 * 电台分类接口
 */
export function getDjradioCateList() {
    return network({
        url: "/dj/catelist",
    });
}


/**
 * 获取推荐节目、推荐电台
 */
export function getDjradioProgramRecommend() {
    return network({
        url: "/program/recommend",
    })
}

/**
 * 获取电台节目榜
 * @param {Number} limit 返回数量 , 默认为 100
 * @param {Number} offset 偏移数量，用于分页 , 如 :( 页数 -1)*100, 其中 100 为 limit 的值 , 默认为 0
 */
export function getDjradioProgramTopList(limit = 100, offset = 0) {
    return network({
        url: "/dj/program/toplist",
        params: {
            limit,
            offset,
        },
    });
}

/**
 * 获取对应类型电台列表
 * @param {Number} type 分类ID
 */
export function getDjradioRecommendTypes(type) {
    return network({
        url: "/dj/recommend/type",
        params: {
            type,
        },
    });
}

export function getDjradioRecommendType(type) {
    return network({
        url: "/dj/recommend/type",
        params: {
            type,
        },
    });
}

/**
 * 获得对应电台的详情介绍
 * @param {Number} id 电台ID
 */
export function getDjradioDetail(rid) {
    return network({
        url: "/dj/detail",
        params: {
            rid,
        },
    });
}

/**
 * 获取对应电台的电台节目以及对应的 id
 * @param {Number} rid 电台ID
 * @param {Number} limit 返回数量 , 默认为 30
 * @param {Number} offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {Boolean} asc 排序方式,默认为 false (新 => 老 ) 设置 true 可改为 老 => 新
 */
export function getDjradioProgramList(rid, limit = 30, offset = 0, asc = false) {
    return network({
        url: "/dj/program",
        params: {
            rid,
            limit,
            offset,
            asc,
        },
    });
}

/**
 *
 * @param {Number} cateId 类别 id
 * @param {Number} limit 返回数量 , 默认为 30
 * @param {Number} offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 */
export function getDjradioRecommendHot(cateId, limit = 30, offset = 0) {
    return network({
        url: "/dj/radio/hot",
        params: {
            cateId,
            limit,
            offset,
        },
    });
}
