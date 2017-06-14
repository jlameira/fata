import axios from 'axios'
const BASE_URL = 'https://fatauni.herokuapp.com/fata/v1/public'

export function getListCompany() {
  const request = axios.get(`${BASE_URL}/company/findall`)
  return {
    type: 'COMPANY_FETCH',
    payload: request
  }
}