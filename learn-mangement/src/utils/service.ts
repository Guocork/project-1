import axios from 'axios';


const service = axios.create({
    timeout: 100000,
    baseURL: 'http://124.222.10.135:9007',
  });



  service.interceptors.request.use(
    function(config) {
      // 可在发送请求前对请求进行处理，例如添加公共请求头、请求参数处理等
      // 修改 config 配置后需要返回它，否则请求将无法发送
      return config;
    },
    function(error) {
      // 请求错误处理
      return Promise.reject(error);
    }
  );

  service.interceptors.response.use(
    function(response) {
      // 可对响应数据进行处理，例如提取特定数据、错误处理等
      // 修改 response 数据后需要返回它，否则调用方将接收到修改前的数据
      return response.data;
    },
    function(error) {
      // 响应错误处理
      return Promise.reject(error);
    }
  );
  export default service;