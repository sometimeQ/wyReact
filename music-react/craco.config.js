// 路径
const path = require('path');

const resolve = (dir) => path.resolve(__dirname, dir);

// 别名配置信息
module.exports = {
    webpack: {
        alias: {
            "@" : resolve('src'), // 统一找src目录下面的路径
            "components": resolve('src/components'),
            // "assets": resolve('src/assets')
        }
    }
}