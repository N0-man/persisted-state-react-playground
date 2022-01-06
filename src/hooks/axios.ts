import axios, {AxiosResponse} from 'axios'

export const api = axios.create({
  timeout: 15000,
})

export const responseBody = (response: AxiosResponse) => response.data
