import { Request, Response } from 'express'
import { SendLikeService } from '../services/SendLikeService'

class SendLikeController {
  async handle(request: Request, response: Response) {
    const { from, to } = request.params
    const sendLikeService = new SendLikeService()

    try {
      const like = await sendLikeService.execute({ from, to })

      return response.json(like)
    } catch (err) {
      return response
        .status(404)
        .json({ message: err.message || 'Unexpected error' })
    }
  }
}

export { SendLikeController }
