import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export const PORT = process.env.PORT
export const HOST = process.env.HOST
export const USER = process.env.USER
export const PASSWORD = process.env.PASSWORD
export const DATABASE = process.env.DATABASE