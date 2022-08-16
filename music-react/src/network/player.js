import network from "./network";

/**
 * 获取歌曲详细信息
 * @param {Number} ids 歌曲ID
 */
export function getSongDetail(ids) {
    return network({
        url: "/song/detail",
        params: {
            ids: ids,
        },
    });
}

/**
 * 获取歌曲播放链接
 * @param {Number} id 歌曲ID
 */
export function getPlaySong(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

/**
 * 获取歌曲歌词
 * @param {Number} id 歌曲ID
 */
export function getLyric(id) {
    return network({
        url: "/lyric",
        params: {
            id,
        },
    });
}

/**
 * 获取歌曲的相似歌曲
 * @param {Number} id 歌曲ID
 */
export function getSimiSongs(id) {
    return network({
        url: "/simi/song",
        params: {
            id,
        },
    });
}

/**
 * 获取歌曲热门的评论
 * @param {Number} id 歌曲ID
 */
export function getSongHotComments(id) {
    return network({
        url: "/comment/music",
        params: {
            id,
        },
    });
}

/**
 * 获取歌曲普通的评论
 * @param {Number} id 歌曲ID
 * @param {Number} limit 取出评论数量 , 默认为 20
 * @param {Number} offset 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
 */
export function getSongComments(id, limit = 20, offset = 0) {
    return network({
        url: "/comment/music",
        params: {
            id,
            limit,
            offset,
        },
    });
}

/**
 * 获取相似歌单
 * @param {Number} id 歌曲 id
 */
export function getSimiPlaylist(id) {
    return network({
        url: "/simi/playlist",
        params: {
            id,
        },
    });
}
