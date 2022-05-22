import { Request, Response } from 'express'
import { ListTinderUsersService } from '../services/ListTinderUsersService'

class ListTinderUsersController {
  async handle(request: Request, response: Response) {
    const listTinderUsersService = new ListTinderUsersService()

    const users = await listTinderUsersService.execute()

    return response.json(users)
  }
}

export { ListTinderUsersController }
