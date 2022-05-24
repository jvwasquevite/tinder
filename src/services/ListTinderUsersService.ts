import { API } from '../api'

interface ITinderRequest {
  gender: string
  status: string
  orientation: string
}

class ListTinderUsersService {
  async execute({ gender, status, orientation }: ITinderRequest) {
    const data = await API()

    const users = data.filter(user => user.tinder.value === 'true')

    if (gender || status || orientation) {
      return users.filter(
        user =>
          user.genero.value === gender &&
          user.status_de_relacionamento.value === status &&
          user.orientacao_sexual.value === orientation
      )
    } else {
      return users
    }
  }
}

export { ListTinderUsersService }
