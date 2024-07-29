// api.js
import axios from 'axios';
 
const API_BASE_URL = 'http://127.0.0.1:4523/m1/4296710-3939141-default'; // 根据实际情况设置基础URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  // 其他axios配置选项
  timeout: 1000,
  headers: {'Content-Type':'application/json'}
});
 
// 封装具体的接口请求函数
const api = {
  async getPosts() {
    try {
      const response = await apiClient.get('/assets/handle');
      return response.data;
    } catch (error) {
      console.error('获取帖子失败：', error);
      throw error;
    }
  },
 
  async createPost(postData:any) {
    try {
      const response = await apiClient.post('/assets/upload', postData);
      return response.data;
    } catch (error) {
      console.error('创建帖子失败：', error);
      throw error;
    }
  },
 
  // 可以继续添加其他接口请求函数
};
 
export default api;