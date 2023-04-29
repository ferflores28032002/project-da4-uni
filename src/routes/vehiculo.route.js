import { Router } from "express";
import { create, findAllVehiculo, findOneVehiculo, deleteVehiculo, update } from "../controllers/vehiculo.controllers.js";


const route = Router()

// Routes
route.get('/vehiculos', findAllVehiculo)
route.get('/vehiculo/:matricula', findOneVehiculo)
route.delete('/vehiculo/:id', deleteVehiculo)
route.put('/vehiculo/:id', update)
route.post('/vehiculo', create)

export default route

