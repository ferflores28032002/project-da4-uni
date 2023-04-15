import { Router } from "express";
import { create, findAllUser } from "../controllers/users.controllers.js";


const route = Router()

// Routes
route.get('/users', findAllUser)
route.post('/users', create)


export default route

