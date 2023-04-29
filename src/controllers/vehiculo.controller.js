import { validationResult } from "express-validator";
import { vehiculoModel } from "../models/vehiculo.model.js";


export const findAllVehiculo = async (req, res) => {
    try {
        const { count, rows } = await vehiculoModel.findAndCountAll()

        res.json({
            count,
            rows
        })
    } catch (error) {
        res.status(500).send('Server error');
    }
}



export const create = async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const vehiculo = await vehiculoModel.create(req.body)
        res.json({
            msg: 'vehiculo creado con exito!',
            vehiculo
        })
    } catch (error) {
        res.status(500).send('Server error');
    }

}



export const findOneVehiculo = async (req, res) => {

    const { matricula } = req.params

    try {
        const vehiculo = await vehiculoModel.findOne({
            where: { matricula }
        })
        if (vehiculo) {
            res.json({
                vehiculo
            })
        } else {
            res.json(`Vehiculo con matricula ---> ${matricula} no encontrado! `)
        }

    } catch (error) {
        res.status(500).send('Server error');
    }
}


export const deleteVehiculo = async (req, res) => {

    const { id } = req.params

    try {
        const vehiculo = await vehiculoModel.findOne({
            where: { id }
        })
        if (vehiculo) {
            await vehiculoModel.destroy({ where: { id } })
            res.json(`Vehiculo eliminado exitosamente!`)
        } else {
            res.json(`Vehiculo con id ---> ${id} no encontrado! `)
        }

    } catch (error) {
        res.status(500).send('Server error');
    }
}


export const update = async (req, res) => {

    const { id } = req.params
    const { matricula, color } = req.body

    try {

        const vehiculo = await vehiculoModel.findOne({
            where: { id }
        })

        if (vehiculo) {
            vehiculo.set({ matricula, color })
            await vehiculo.save()
            res.json({
                msg: 'Vehiculo actualizado!',
                vehiculo
            })
        } else {
            res.json(`Vehiculo con id ---> ${id} no encontrado! `)
        }


    } catch (error) {
        res.status(500).send('Server error');
    }

}






