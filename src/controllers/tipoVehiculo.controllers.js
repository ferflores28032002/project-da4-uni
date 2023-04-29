import { tipoVehiculoModel } from "../models/tipoVehiculo.model.js";


export const findAllTipoVehiculo = async (req, res) => {
    try {
        const { count, rows } = await tipoVehiculoModel.findAndCountAll()

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
        const tipo = await tipoVehiculoModel.create({ name })
        res.json({
            msg: 'Tipo de vehiculo creado con exito!',
            tipo
        })
    } catch (error) {
        console.log(error)
    }

}



