import express from "express";
import cors from 'cors'
import { PORT } from "./config/EnvConfig.js";
import sequelize from "./database/conexion.js";
import routeUser from './routes/users.route.js'


const app = express()
// Routes 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/v1', routeUser)


async function main() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('Connect succefully a mysql')
    } catch (error) {
        console.log(error.message)
    }
}

main()


app.listen(PORT, () => console.log(`Server on port ---> ${PORT}`))