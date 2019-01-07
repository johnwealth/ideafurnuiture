import axios from 'axios'

const instance = axios.create({
  baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : 'https://ninjafurniturz.herokuapp.com/'
})

instance.CancelToken = axios.CancelToken
instance.isCancel = axios.isCancel


instance.interceptors.request.use(
  (config) => {
    let token = localStorage.getItem('authtoken')
 
    if (token) {
      config.headers['Authorization'] = `Bearer ${ token }`
    }
 
    return config
  },
 
  (error) => {
    return Promise.reject(error)
  })



export default instance

