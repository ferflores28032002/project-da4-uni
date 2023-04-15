import { Sequelize } from "sequelize";
import { DATABASE, PASSWORD, USER } from "../config/EnvConfig.js";


const sequelize = new Sequelize({
    database: DATABASE,
    username: USER,
    password: PASSWORD,
    dialect: 'mysql'
})

export default sequelize