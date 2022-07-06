import network from "./network";


/**
 * 获取精彩评论
 * @param {*} id  排行榜 id
 * @param {*} limit  取出评论数量 , 默认为 20
 * @param {*} offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1) * 20, 其中 20 为 limit 的值
 */
export function getAlbumComment(id, limit = 20, offset = 0) {
    return network({
        url: '/comment/playlist',
        params: {
            id: id,
            limit: limit,
            offset: offset,
        }
    })
}

/**
 * 0: 歌曲 1: mv 2: 歌单 3: 专辑 4: 电台 5: 视频;
 * 获取热门评论
 * @param {*} id 
 * @param {*} type 
 * @param {*} limit 
 * @param {*} offset 
 * @returns 
 */
export function getHotComment(id, type, limit = 20, offset = 0) {
    return network({
        url: '/comment/hot',
        params: {
            id: id,
            limit: limit,
            offset: offset,
            type: type
        }
    })
}