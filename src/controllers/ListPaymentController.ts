import { Request, Response } from 'express'
import { ListPaymentService } from '../services/ListPaymentService'

class ListPaymentController {
  async handle(request: Request, response: Response) {
    const listPaymentService = new ListPaymentService()

    const data = await listPaymentService.execute()

    return response.json(data)
  }
}

export { ListPaymentController }
