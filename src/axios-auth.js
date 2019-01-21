import axios from 'axios'

const instance = axios.create({
  baseURL: (process.env.VUE_APP_BASE_URL !== undefined) ? process.env.VUE_APP_BASE_URL : 'https://ninjafurniturz.herokuapp.com/'
});



export default instance

