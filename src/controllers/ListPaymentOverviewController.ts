import { Request, Response } from 'express'
import { ListPaymentOverviewService } from '../services/ListPaymentOverviewService'

class ListPaymentOverviewController {
  async handle(request: Request, response: Response) {
    const listPaymentOverviewService = new ListPaymentOverviewService()

    const data = await listPaymentOverviewService.execute()

    return response.json(data)
  }
}

export { ListPaymentOverviewController }
