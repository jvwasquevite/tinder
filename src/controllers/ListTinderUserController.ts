import { Request, Response } from 'express'
import { ListTinderUserService } from '../services/ListTinderUserService'

class ListTinderUserController {
  async handle(request: Request, response: Response) {
    const { email } = request.params
    const listTinderUserService = new ListTinderUserService()

    try {
      const user = await listTinderUserService.execute({
        email,
      })

      return response.json(user)
    } catch (err) {
      return response
        .status(404)
        .json({ message: err.message || 'Unexpected error' })
    }
  }
}

export { ListTinderUserController }
