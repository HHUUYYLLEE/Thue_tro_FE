import http from '../utils/http'

export const getAllRooms = (params) => http.get(`room`, { params })
