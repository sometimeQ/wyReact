/**
 * 解析歌词
 * @param {String} lyricString 歌词
 * 格式：
 *    [00:00.000] 作曲: 许嵩
 *    [00:01.000] 作词 : 许嵩
 *    [00:22.240]天空好想下雨
 *    [00:24.380]我好想住你隔壁
 *    [00:26.810]傻站在你家楼下
 */
export function parseLyric(lyricString) {
    const lineStrings = lyricString.split("\n");
    const lyrice = [];
    for (let line of lineStrings) {
        if (line) {
            // 使用正则表达式获取时间
            const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;
            const result = parseExp.exec(line);

            if (!result) continue;

            // 全部时间已毫秒为单位
            const time1 = result[1] * 60 * 1000;
            const time2 = result[2] * 1000;
            const time3 = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
            const time = time1 + time2 + time3;

            const content = line.replace(parseExp, "").trim();
            const lineObj = { time, content };

            lyrice.push(lineObj);
        }
    }
    return lyrice;
}


/**
 * 取随机数
 * @param {Number} num 最大值
 */
export function getRandomNumber(num) {
    return Math.floor(Math.random() * num);
}