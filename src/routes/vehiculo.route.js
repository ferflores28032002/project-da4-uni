import { Router } from "express";
import { create, findAllVehiculo, findOneVehiculo, deleteVehiculo, update } from "../controllers/vehiculo.controller.js"
import { validarCamposVehiculo } from "../validation/vehiculo.js";


const route = Router()

// Routes y validaciones correspondientes 

route.get('/vehiculos', findAllVehiculo)
route.post('/vehiculo',validarCamposVehiculo(), create);
route.get('/vehiculo/:matricula', findOneVehiculo)
route.put('/vehiculo/:id', update)
route.delete('/vehiculo/:id', deleteVehiculo)

export default route

