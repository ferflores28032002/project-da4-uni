import { Router } from "express";
import { create, findAllModeloVehiculo } from "../controllers/modelo.controller.js";


const route = Router()

// Routes
route.get('/modelo/vehiculo',findAllModeloVehiculo )
route.post('/modelo/vehiculo', create)

export default route

