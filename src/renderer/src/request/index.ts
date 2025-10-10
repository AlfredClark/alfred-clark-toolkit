import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:8000/api', // 设置基地址
  timeout: 2000 // 请求超时：当 2s 没有响应就会结束请求
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 发请求前做的一些处理，数据转化，配置请求头，设置 token,设置 loading 等，根据需求去添加
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
    // 拦截后的放行
    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 只要响应对象中的数据
    return response
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default request
