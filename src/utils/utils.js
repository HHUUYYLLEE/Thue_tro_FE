import axios from 'axios'
import HttpStatusCode from '../constants/httpStatusCode.enum'
export function isAxiosError(error) {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError(error) {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity
}

export function getAges(dateOB) {
  const date = new Date(dateOB)
  const currentDate = new Date()
  const year = date.getFullYear()
  const currentYear = currentDate.getFullYear()

  return currentYear - year
}

export function displayNum(num) {
  return num
    .toString()
    .replace(/\D/g, '')
    .replace(/^0+(\d)/, '$1')
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, '.')
}

export function convertDate(date) {
  return date.substring(0, 10).replaceAll('-', '/')
}
