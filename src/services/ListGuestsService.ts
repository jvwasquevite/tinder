import { API } from '../api'

class ListGuestsService {
  async execute() {
    const data = await API()

    return data
  }
}

export { ListGuestsService }
