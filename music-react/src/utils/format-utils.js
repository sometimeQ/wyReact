/**
 * 将指定的图片地址转换为指定大小的图片地址
 * @param {String} imgUrl 图片地址
 * @param {Number} size 图片大小
 * @return {String} 返回的图片地址
 * 缩略图
 */
export function getSizeImage(imgUrl, size, height) {
    if (!height) {
        return `${imgUrl}?param=${size}x${size}`;
    } else {
        return `${imgUrl}?param=${size}y=${height}`;
    }
}


/** 将指定数字转为 n万、n亿 形式
 *
 * @param {Number} count 数字
 * @return {String} 返回的字符串
 */
export function getCount(count) {
    if (count < 0) return;
    if (count < 10000) {
        return count;
    } else if (Math.floor(count / 10000) < 10000) {
        return Math.floor(count / 1000) / 10 + "万";
    } else {
        return Math.floor(count / 10000000) / 10 + "亿";
    }
}

/**
 * 解析URL链接中的参数
 * @param {*} url 
 */
export function getQueryParam(url) {
    const decodeURL = decodeURI(url);
    let Object = {};
    try {
        for (let item of decodeURL.split('&')) {
            const parseExp = /(\w*)=(\w*)/;
            const result = parseExp.exec(item);
            Object[result[1]] = result[2];
        }
    } catch (error) {
        console.log('解析URL链接中的参数失败');
    }
    return Object;
}

/**
 * 时间戳转换时间格式
 * @param {*} time 
 * @param {*} fmt 
 * @returns 
 */
export function formatDate(time, fmt) {
    let date = new Date(time);

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};

/**
 * 拼接
 * @param {*} str 
 * @returns 
 */
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
};

/**
 * 月
 * @param {*} time 
 * @returns 
 */
export function formatMonthDay(time) {
    return formatDate(time, "MM月dd日");
}

/**
 * 时间
 * @param {*} time 
 * @returns 
 */
export function formatMinuteSecond(time) {
    return formatDate(time, "mm:ss");
}
