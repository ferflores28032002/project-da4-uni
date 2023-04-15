import { roles } from "../models/roles.model"


export const finAllRoles = async (req, res) => {
    try {

        const rolesUser = await roles.findAndCountAll()

        res.json({
            rolesUser
        })

    } catch (error) {
        console.log(error)
    }
}