import axios from 'axios';

export default function network(config) {
    // 创建实例
    const instance = axios.create({
        // baseURL: 'http://123.207.32.32:9001',
        baseURL: 'http://localhost:3000', // 弃用本地服务器 最新版本: 4.6.3, 当前版本: 4.0.10, 请及时更新
        timeout: 5000,
    });

    return instance(config);
}