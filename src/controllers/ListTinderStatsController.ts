import { Request, Response } from 'express'
import { ListTinderStatsService } from '../services/ListTinderStatsService'

class ListTinderStatsController {
  async handle(request: Request, response: Response) {
    const listTinderStatsService = new ListTinderStatsService()

    const users = await listTinderStatsService.execute()

    return response.json(users)
  }
}

export { ListTinderStatsController }
