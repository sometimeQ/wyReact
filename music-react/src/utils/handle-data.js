
// 
export function handleSongsCategory(data) {
    // 1.获取所有的类别, 0: '语种', 1: '风格', 2: '场景', 3: '情感', 4: '主题'}
    const category = data.categories;
    // console.log(category);

    // 2.创建类别数据结构, Object.entries() 方法返回一个给定对象自身可枚举属性的键值对数组
    /**
     * 整合成以下的格式
        0: {name: '语种', subs: Array(0)}
        1: {name: '风格', subs: Array(0)}
        2: {name: '场景', subs: Array(0)}
        3: {name: '情感', subs: Array(0)}
        4: {name: '主题', subs: Array(0)}
     */
    const categoryData = Object.entries(category).map(([key, value]) => {
        return {
            name: value,
            subs: []
        }
    });

    // console.log(data.sub);

    // 3.将subs添加到对应的类别中
    /**
     * 返回
     * 0: {name: '语种', subs: Array(5)}
     */

    /**
     * 原始数据
     *  0:
        activity: false
        category: 4
        hot: true
        imgId: 0
        imgUrl: null
        name: "综艺"
        resourceCount: 1000
        resourceType: 0
        type: 0
     */
    for (let item of data.sub) {
        // 把对应的category 添加到对应的数组当中去
        categoryData[item.category].subs.push(item);
    }

    return categoryData;
}