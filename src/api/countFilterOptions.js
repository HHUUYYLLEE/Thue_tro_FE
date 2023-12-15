import http from '../utils/http'

export const getServicesCount = (feature) => http.get('room/countServices/count', { params: { key: feature } })
export const getNumberOfPeopleCount = (number) =>
  http.get('room/countPeoples/count', { params: { number_or_people: number } })
