import { Router } from "express";
import { create, findAllTipoVehiculo } from "../controllers/tipoVehiculo.controller.js";


const route = Router()

// Routes
route.get('/tipo/vehiculo', findAllTipoVehiculo)
route.post('/tipo/vehiculo', create)

export default route

