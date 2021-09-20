import Axios from 'axios'
import { DEEZER_BASE_URL } from '../globals'

const Client = Axios.create({ baseURL: DEEZER_BASE_URL })

export const FindAlbum = async (data) => {
  try {
    const res = await Client.get(`/search/album?q="${data}"`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const FindArtist = async (data) => {
  try {
    const res = await Client.get(`/search/artist?q="${data}"`)
    return res.data
  } catch (error) {
    throw error
  }
}