import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://60eeb492eb4c0a0017bf45ba.mockapi.io/api/',
  timeout: 5000,
})

export const getEmployees = async () => {
  try {
    const response = await instance.get('/employees')
    return { type: 'SUCCESS', response }
  } catch (err) {
    return { type: 'ERROR', error: err }
  }
}
