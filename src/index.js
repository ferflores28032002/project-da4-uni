import express from "express";
import cors from 'cors'
import { DATABASE, PORT } from "./config/EnvConfig.js";
import sequelize from "./database/conexion.js";
import routeVehiculo from './routes/vehiculo.route.js'
import routeTipoVehiculo from './routes/tipoVehiculo.route.js'
import routeModeloVehiculo from './routes/modelo.route.js'


const app = express()
// Routes 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes y controllers
app.use('/api', routeVehiculo)
app.use('/api', routeTipoVehiculo)
app.use('/api', routeModeloVehiculo)


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