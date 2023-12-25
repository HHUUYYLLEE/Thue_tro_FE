import http from '../utils/http'

export const getAllRooms = (params, token) =>
  token === null ? http.get(`room`, { params }) : http.get('room', { headers: { Authorization: token } }, { params })
export const getRoom = (id) => http.get(`room/${id}`)
export const getRandomRoom = () => http.get(`room/randomRoom/random`)
export const checkARoom = (formData) => http.patch('room/checkRoom/check', formData)
