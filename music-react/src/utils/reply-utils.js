
/**
    * 关键字变色
    * @params content 内容
    * @params keyword 关键词
    * @params tagName 标签名
   */
export function warpTag(content, keyword, tagName) {
    if (content === "No results") {
        return content
    }

    content = content.innerText;


    const a = content.toLowerCase()
    const b = keyword.toLowerCase()

    const indexof = a.indexOf(b)
    const c = indexof > -1 ? content.substr(indexof, keyword.length) : ''
    console.log('xxxxx 1');
    console.log(c);
    const val = `<${a} style="color:red;">${c}</${a}>`
    const regS = new RegExp(keyword, 'gi')
    console.log('regS', regS, keyword, val)
    console.log('regS222222', content, content.replace(regS, val))
    return content.replace(regS, val)
}


