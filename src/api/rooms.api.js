import http from '../utils/http'

export const getAllRooms = (params) => http.get(`room`, { params })
export const getRoom = (id) => http.get(`room/${id}`)
export const getRandomRoom = () => http.get(`room/randomRoom/random`)