import { vehiculoModel } from "../models/vehiculo.model.js";


export const findAllVehiculo = async (req, res) => {
    try {
        const { count, rows } = await vehiculoModel.findAndCountAll()

        res.json({
            count,
            rows
        })
    } catch (error) {
        console.log(error)
    }
}

export const create = async (req, res) => {

    try {
        const vehiculo = await vehiculoModel.create(req.body)
        res.json({
            msg: 'vehiculo creado con exito!',
            vehiculo
        })
    } catch (error) {
        console.log(error)
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
        console.log(error)
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
        console.log(error)
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
        console.log(error)
    }

}






