import network from "./network";

/**
 * 轮播图
 */ 
export function getTopBanners() {
    return network({
        url: '/banner'
    })
}

/** 热门推荐
 * @param {Nubmer} limit 指定需要的数据个数
 */
export function getHotRecommends(limit) {
    return network({
        url: 'personalized',
        params: {
            limit: limit,
        }
    })
}

/**
 * 新碟上架
 */
export function getNewAlbum(limit) {
    return network({
        url: '/top/album',
        params: {
            limit: limit
        }
    })
}

/**
 * 所有榜单
 */
export function getTopList(idx) {
    return network({
        // url: '/top/list',
        url: '/toplist',
        params: {
            idx: idx,
        }
    })
}

/**
 * 榜单详情
 */
export function getAllTopDetail(id) {
    return network({
        url: '/toplist/detail',
        params: {
            id: id
        }
    })
}

export function getArtistList(type, area, initial) {
    return network({
        url: '/artist/list',
        // type=1&area=96&initial=b
        params: {
            type: type,
            area: area,
            initial: initial
        }
    })
}