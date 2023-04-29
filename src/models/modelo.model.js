import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";
import { vehiculoModel } from "./vehiculo.model.js";

export const modeloVehiculoModel = sequelize.define('modelo_vehiculo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

// Relaciones
modeloVehiculoModel.hasMany(vehiculoModel, {
    foreignKey: "id_modelo_vehiculo",
    sourceKey: "id",
});

vehiculoModel.belongsTo(modeloVehiculoModel, {
    foreignKey: "id_modelo_vehiculo",
    targetId: "id",
});