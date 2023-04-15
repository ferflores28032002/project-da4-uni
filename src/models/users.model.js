import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";


export const userModel = sequelize.define('user', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 //Se pondra solito
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            min: 1,
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})