import axios, { AxiosInstance } from 'axios';

// 配置新建一个 axios 实例
const service: AxiosInstance = axios.create({
	baseURL: "http://127.0.0.1:4523/m1/4296710-3939141-default",
	timeout: 50000,
	headers: { 'Content-Type': 'application/json' },

});

// 导出 axios 实例
export default service;