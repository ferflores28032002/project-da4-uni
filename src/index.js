import express from "express";
import cors from 'cors'
import { DATABASE, PORT } from "./config/EnvConfig.js";
import sequelize from "./database/conexion.js";
import apiRouter from './routes/index.js';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// setGlobalPrefix de la api
app.use('/api', apiRouter)

async function main() {
    try {
        await sequelize.authenticate()
        await sequelize.sync({ force: false })
        console.log('Conectado exitosamente a la base de datos --> ' + DATABASE)
    } catch (error) {
        console.log(error)
    }
}

main()


app.listen(PORT, () => console.log(`Sevidor en el puerto ---> ${PORT}`))