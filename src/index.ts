import express from 'express'
import { router } from './routes'
import cors from 'cors'

import { Handler } from '@netlify/functions'

const app = express()
app.use(express.json())

app.use(cors())
app.use(router)

export async function handler() {
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ msg: 'Hello world' }),
  }
}

app.listen(8000, () => console.log('Server is running'))
