import { Request, Response } from 'express'
import { ListTinderUsersService } from '../services/ListTinderUsersService'

class ListTinderUsersController {
  async handle(request: Request, response: Response) {
    const { gender, status, orientation } = request.query as any

    const listTinderUsersService = new ListTinderUsersService()
    const users = await listTinderUsersService.execute({
      gender,
      status,
      orientation,
    })

    return response.json(users)
  }
}

export { ListTinderUsersController }
