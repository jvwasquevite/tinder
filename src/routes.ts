import { Router } from 'express'

import { ListGuestsController } from './controllers/ListGuestsController'
import { ListTinderUsersController } from './controllers/ListTinderUsersController'
import { ListGuestsStatsController } from './controllers/ListGuestsStatsController'
import { ListTinderStatsController } from './controllers/ListTinderStatsController'
import { ListTinderUserController } from './controllers/ListTinderUserController'
import { SendLikeController } from './controllers/SendLikeController'
import { ListPaymentController } from './controllers/ListPaymentController'
import { ListPaymentOverviewController } from './controllers/ListPaymentOverviewController'

const listGuestsController = new ListGuestsController()
const listTinderUsersController = new ListTinderUsersController()
const listGuestStatsController = new ListGuestsStatsController()
const listTinderStatsController = new ListTinderStatsController()
const listTinderUserController = new ListTinderUserController()
const sendLikeController = new SendLikeController()
const listPaymentController = new ListPaymentController()
const listPaymentOverviewController = new ListPaymentOverviewController()

const router = Router()

router.get('/', listGuestStatsController.handle)
router.get('/guests', listGuestsController.handle)
router.get('/guests/payment', listPaymentController.handle)
router.get('/guests/payment/overview', listPaymentOverviewController.handle)

router.get('/tinder', listTinderStatsController.handle)
router.get('/tinder/users', listTinderUsersController.handle)
router.get('/tinder/user/:email', listTinderUserController.handle)
router.post('/tinder/like/:from/:to', sendLikeController.handle)

export { router }
