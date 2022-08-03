import  network  from "./network";

/**
 * 获取热门歌手数据
 * @param {Number} limit 取出数量。默认为 50
 * @param {Number} offset 偏移数量。用于分页，如 :(页数 -1)*50, 其中 50 为 limit 的值，默认为 0
 */
export function getTopPrtists(limit = 50, offset = 0) {
    return network({
        url: "/top/artists",
        params: {
            limit,
            offset,
        },
    });
}

/**
 * 获取歌手分类数据
 * @param {Number} area 歌手分类id。 -1:全部 7华语 96欧美 8:日本 16韩国 0:其他
 * @param {Number} type -1:全部 1:男歌手 2:女歌手 3:乐队
 * @param {String} initial 首字母索引查找参数。返回内容将以字段拼音开头为 initial
 * @param {Number} limit 取出数量。默认为 30
 * @param {Number} offset 偏移数量。用于分页，如 :(页数 -1)*50, 其中 50 为 limit 的值，默认为 0
 */
export function getAristClassifyList(area = -1, type = -1, initial = "", limit = 30, offset = 0) {
    return network({
        url: "/artist/list",
        params: {
            area,
            type,
            initial,
            limit,
            offset,
        },
    });
}

/**
 * 获得歌手部分信息和热门歌曲
 * @param {Number} id 歌手id
 */
export function getArtists(id) {
    return network({
        url: "/artists",
        params: {
            id,
        },
    });
}

/**
 * 获取歌手描述
 * @param {Number} id 歌手 id
 */
export function getAristSimi(id) {
    return network({
        url: "/artist/desc",
        id,
    });
}

/**
 * 获取歌手专辑内容
 * @param {Number} id 歌手 id
 * @param {Number} limit 取出数量 , 默认为 50
 * @param {Number} offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 */
export function getArtistAlbum(id, limit = 50, offset = 0) {
    return network({
        url: "/artist/album",
        params: {
            id,
            limit,
            offset,
        },
    });
}

/**
 * 获取歌手 MV
 * @param {Number} id 歌手 id
 * @param {Number} limit 取出数量 , 默认为 50
 * @param {Number} offset 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 */
export function getArtistMV(id, limit = 50, offset = 0) {
    return network({
        url: "/artist/mv",
        params: {
            id,
            limit,
            offset,
        },
    });
}

/**
 * 获取歌手描述
 * @param {Number} id 歌手 id
 */
export function getArtistDesc(id) {
    return network({
        url: "/artist/desc",
        params: {
            id,
        },
    });
}
