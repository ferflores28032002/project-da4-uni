import { request, response } from "express";
import { userModel } from "../models/users.model.js";
import bcryptjs from 'bcryptjs'


export const findAllUser = async (req = request, res = response) => {

    // Mostraremos todos los usuarios de la tabla

    try {
        const { count, rows } = await userModel.findAndCountAll()

        res.json({
            msg: 'Desde el controllers findAllUser',
            count,
            rows
        })

    } catch (error) {

    }
}

// Crearemos un usuario

export const create = async (req = request, res = response) => {

    const { name, password } = req.body
    try {
        const passHash = bcryptjs.hashSync(password)

        const user = await userModel.create({
            name,
            password: passHash
        })

        res.json({
            msg: 'usuario creado!',
            user
        })

    } catch (error) {

    }
}

