import express from 'express'
import { usuarioRoute } from './routes/usuarioRoute'

const app = express()

app.use(express.json())
app.use('/usuarios', usuarioRoute)

export { app }