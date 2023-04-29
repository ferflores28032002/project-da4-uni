import { DataTypes } from "sequelize";
import sequelize from "../database/conexion.js";
import { vehiculoModel } from "./vehiculo.model.js";

export const tipoVehiculoModel = sequelize.define('tipo_vehiculo', {
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
tipoVehiculoModel.hasMany(vehiculoModel, {
    foreignKey: "id_tipo_vehiculo",
    sourceKey: "id",
});

vehiculoModel.belongsTo(tipoVehiculoModel, {
    foreignKey: "id_tipo_vehiculo",
    targetId: "id",
});