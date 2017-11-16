import axios from 'axios'
import interceptor from './interceptor'

const API = interceptor(
  axios.create({ baseURL: 'https://www.easy-mock.com/mock/59faf3754d687a1717722995/IMAGE/' })
)

export default API
