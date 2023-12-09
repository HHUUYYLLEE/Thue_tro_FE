import http from '../utils/http'

export const getAllRooms = () => http.get(`room?search=&page=&limit=500`)
