import Client from './api'

export const GetAllAlbums = async () => {
  try {
    const res = await Client.get('')
    return res.data
  } catch (error) {
    throw error
  }
}

export const AddAlbum = async (data) => {
  try {
    const res = await Client.post('', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateAlbum = async (data) => {
  try {
    const res = await Client.put('', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteAlbum = async (data) => {
  try {
    const res = await Client.delete('', data)
    return res.data
  } catch (error) {
    throw error
  }
}