import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";

export const vehiculoModel = sequelize.define('vehiculos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    chasis: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    anio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validarAño

    }
})

function validarAño(año) {
    const añoActual = new Date().getFullYear();
    if (año && !isNaN(año) && año >= 1900 && año <= añoActual + 1) {
        return true;
    }
    throw new Error('El año debe ser un número válido entre 1900 y el año actual más 1.');
}
