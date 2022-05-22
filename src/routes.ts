import { Router } from 'express'

import { ListGuestsController } from './controllers/ListGuestsController'
import { ListTinderUsersController } from './controllers/ListTinderUsersController'
import { ListGuestsStatsController } from './controllers/ListGuestsStatsController'
import { ListTinderStatsController } from './controllers/ListTinderStatsController'

const listGuestsController = new ListGuestsController()
const listTinderUsersController = new ListTinderUsersController()
const listGuestStatsController = new ListGuestsStatsController()
const listTinderStatsController = new ListTinderStatsController()

const router = Router()

router.get('/', listGuestStatsController.handle)
router.get('/guests', listGuestsController.handle)

router.get('/tinder', listTinderStatsController.handle)
router.get('/tinder/users', listTinderUsersController.handle)

export { router }
