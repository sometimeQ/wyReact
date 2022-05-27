import axios from 'axios';

export default function network(config) {
    // 创建实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:9001',
        timeout: 5000,
    });

    return instance(config);
}