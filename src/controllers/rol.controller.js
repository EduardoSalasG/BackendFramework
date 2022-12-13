import { getConnection, sql} from "../database/connection";

export const getRolesByIdTenant = async (req,res) => {

    const {id_Tenant} = req.body;

    if(id_Tenant == null){
        return res.status(400).json({msg: "Bad Request. Please fill all fields"})
    }
    
    const pool = await getConnection();
    const result = await pool
        .request()
        .input('id_Tenant',sql.Int,id_Tenant)
        .query(`EXEC get_Roles_of_tenant_by_id_tenant @id_Tenant`);
    res.json(result.recordset)


}

export const updateRolByIdUsuario = async (req,res) => {

    const {id_Rol, id_Usuario} = req.body;

    if(id_Rol == null || id_Usuario == null){
        return res.status(400).json({msg:'Bad Request. Please fill all fields'})
    }

    const pool = await getConnection();
    const result = await pool
    .request()
    .input('id_Rol',sql.Int,id_Rol)
    .input('id_Usuario',sql.Int,id_Usuario)
    .query('EXEC update_rol_by_id_usuario @id_Usuario, @id_Rol')
    res.json({status:'ok'})

}

export const deleteOpcionMenuByIdRol = async (req,res) => {
    const {id_Rol} = req.body;

    if(id_Rol == null){
        return res.status(400).json({msj:'Bad Request. Please fill all fields'})
    }

    const pool = await getConnection();
    const result = await pool
    .request()
    .input('id_Rol',sql.Int,id_Rol)
    .query('EXEC delete_opcionmenu_by_rol_id @id_Rol')
    res.json({status:'ok'})
}

export const getModules = async (req,res) =>{
    const pool = await getConnection()
    const result = await pool
    .request()
    .query('EXEC getModules')
    res.json(result.recordset)
}

export const getOpsMenu = async (req,res) =>{
    const pool = await getConnection()
    const result = await pool
    .request()
    .query('EXEC getOpsMenu')
    res.json(result.recordset)
}

export const setOpmenuByRolId = async (req,res) => {
    const {id_Rol,id_OpMenu} = req.body;

    if(id_Rol == null || id_OpMenu == null){
        return res.status(400).json({msj: 'Bad Request. Please fill all fields'})
    }

    const pool = await getConnection();
    const result = await pool
    .request()
    .input('id_Rol',sql.Int,id_Rol)
    .input('id_OpMenu',sql.Int,id_OpMenu)
    .query('EXEC set_opMenu_by_rol_id @id_OpMenu , @id_Rol')


}