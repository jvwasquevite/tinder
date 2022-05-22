import { Request, Response } from 'express'
import { ListGuestsService } from '../services/ListGuestsService'

class ListGuestsController {
  async handle(request: Request, response: Response) {
    const listContactsService = new ListGuestsService()

    const contacts = await listContactsService.execute()

    return response.json(contacts)
  }
}

export { ListGuestsController }
