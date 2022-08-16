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

export function getPlayUrl(id) {
    return `https://music.163.com/song/media/outer/url?id=${id}.mp3`
}

/**
 * 解析URL链接中的参数
 * @param {*} url 
 */
export function getQueryParam(url) {
    let decodeURL = decodeURI(url);
    // decodeURL = '/discover/songs/?cat=2222';
    console.log(decodeURL);
    let Object = {};
    try {
        for (let item of decodeURL.split('&')) {
            const parseExp = /(\w*)=([^]*)/;
            const result = parseExp.exec(item);
            Object[result[1]] = result[2];
        }
    } catch (error) {
        console.log('解析URL链接中的参数失败');
    }
    return Object;
}

/**
 * 时间戳 转换
 * @param {*} timestamp
 * @returns
 */
export function timestampFormat(timestamp) {
    function zeroize(num) {
        return (String(num).length == 1 ? '0' : '') + num;
    }

    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    var timestampDiff = curTimestamp - timestamp; // 参数时间戳与当前时间戳相差秒数

    console.log(timestampDiff);

    var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
    var tmDate = new Date(timestamp * 1000);  // 参数时间戳转换成的日期对象

    var Y = tmDate.getFullYear(), m = tmDate.getMonth() + 1, d = tmDate.getDate();
    var H = tmDate.getHours(), i = tmDate.getMinutes(), s = tmDate.getSeconds();

    if (timestampDiff < 60) { // 一分钟以内
        return "刚刚";
    } 
    else if (timestampDiff < 3600) { // 一小时前之内
        return Math.floor(timestampDiff / 60) + "分钟前";
    } 
    else if (curDate.getFullYear() == Y && curDate.getMonth() + 1 == m && curDate.getDate() == d) {
        return '今天' + zeroize(H) + ':' + zeroize(i);
    }
     else {
        var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
        if (newDate.getFullYear() == Y && newDate.getMonth() + 1 == m && newDate.getDate() == d) {
            return '昨天' + zeroize(H) + ':' + zeroize(i);
        } else if (curDate.getFullYear() == Y) {
            return zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        } else {
            return Y + '年' + zeroize(m) + '月' + zeroize(d) + '日 ' + zeroize(H) + ':' + zeroize(i);
        }
    }
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

/**
 * 防抖函数, 解决频繁刷新问题
 */
export function debounce(func, delay) {
    let timer = null;
    return function (...args) {
        if (timer) {
            clearInterval(timer);
        }

        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    }
}   
