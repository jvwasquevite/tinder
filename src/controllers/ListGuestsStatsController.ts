import { Request, Response } from 'express'
import { ListGuestsStatsService } from '../services/ListGuestsStatsService'

class ListGuestsStatsController {
  async handle(request: Request, response: Response) {
    const listGuestsStatsService = new ListGuestsStatsService()

    const guests = await listGuestsStatsService.execute()

    return response.json(guests)
  }
}

export { ListGuestsStatsController }
