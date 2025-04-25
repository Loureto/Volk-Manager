import axios from 'axios'

const baseURL = import.meta.env.VITE_SUPABASE_URL
const apiKey = import.meta.env.VITE_SUPABSE_KEY

export const api = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
    apikey: apiKey,
  },
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  },
)
