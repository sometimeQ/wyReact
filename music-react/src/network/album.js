import network from "./network";

/**
 * 获取新碟上架列表。如需具体音乐信息需要调用获取专辑列表接口: /album
 * @param {*} area
 * @param {*} type
 * @param {*} limit
 * @param {*} offset
 */
export function getAlbumTop(area = "ALL", type = "new", limit = 50, offset = 0) {
    return network({
        url: "/top/album",
        params: {
            area,
            type,
            limit,
            offset,
        },
    });
}


/**
 * 获取歌单详情（未登录状态只能获取不完整的歌单,登录后是完整的）
 */
export function getPlayListDetail(id) {
    console.log(id);
    return network({
        url: "/playlist/detail",
        params: {
            id: id,
        },
    })
}

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

/**
 * 获取相关歌单推荐
 * @param {Number} id 歌单ID
 */
export function getRelatedPlayList(id) {
    return network({
        url: "/related/playlist",
        params: {
            id,
        },
    });
}

/**
 * 获取歌单的所有收藏者
 * @param {Number} id 歌单ID
 */
export function getPlayListSubscribers(id) {
    return network({
        url: "/playlist/subscribers",
        params: {
            id,
        },
    });
}
