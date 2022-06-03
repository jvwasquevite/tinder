import { API } from '../api'

interface ITinderRequest {
  email: string
}

class ListTinderUserService {
  async execute({ email }: ITinderRequest) {
    const data = await API()

    const user = data.filter(
      user => user.tinder.value === 'true' && user.email.value === email
    )

    if (user.length === 0) {
      throw new Error('Usuário não encontrado')
    }

    return user
  }
}

export { ListTinderUserService }
