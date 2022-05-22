import { API } from '../api'

class ListTinderUsersService {
  async execute() {
    const users = await API()

    return users.filter(user => user.tinder.value === 'true')
  }
}

export { ListTinderUsersService }
