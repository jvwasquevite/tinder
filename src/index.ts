import express from 'express'
import { router } from './routes'
import cors from 'cors'

import { Handler } from '@netlify/functions'

const app = express()
app.use(express.json())

app.use(cors())
app.use(router)

app.listen(8000, () => console.log('Server is running'))
