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

/**
 * 首页搜索数据
 * @param {*} keywords 
 * @param {*} limit 
 * @param {*} type 
 * @returns 
 */
export function getSearchSongData(keywords, limit = 7, type = 1) {
    return network({
        url: '/search',
        params: {
            keywords,
            limit,
            type,
        }
    })
}

/**
 * 获取歌单信息
 * @param {*} cat 分类，默认为全部
 * @param {*} offset 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 * @param {*} limit 返回数量，默认为35
 */
export function getSongCategoryList(cat = '全部', offset = 0, limit = 35) {
    return network({
        url: '/top/playlist',
        params: {
            cat,
            limit,
            offset
        }
    })
}

/**
 * 获取歌单分类,包含 category 信息
 * @returns 
 */
export function getSongCategory() {
    return network({
        url: '/playlist/catlist'
    })
}