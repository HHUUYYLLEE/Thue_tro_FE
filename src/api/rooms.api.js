import http from '../utils/http'

export const getAllRooms = (page) => http.get(`room?search=&page=${page}&limit=5`)
