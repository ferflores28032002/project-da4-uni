import { modeloVehiculoModel } from "../models/modelo.model.js";


export const findAllModeloVehiculo = async (req, res) => {
    try {
        const { count, rows } = await modeloVehiculoModel.findAndCountAll()

        res.json({
            count,
            rows
        })
    } catch (error) {
        console.log(error)
    }
}


export const create = async (req, res) => {

    const { name } = req.body
    try {
        const tipo = await modeloVehiculoModel.create({ name })
        res.json({
            msg: 'Modelo del vehiculo creado con exito!',
            tipo
        })
    } catch (error) {
        console.log(error)
    }

}



