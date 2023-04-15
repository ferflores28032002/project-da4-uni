import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";


export const roles = sequelize.define('rol', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 //Se pondra solito
    },
    name: {
        type: DataTypes.STRING,
    }
})