import {getConnection, sql} from "../database/connection"

export const getTenants = async (req,res) => {
    const pool = await getConnection();
    const result = await pool.request()
    .query('SELECT * FROM TENANT');
    console.log(result);

    res.json(result.recordset);
};

export const getTenantbyId = async (req,res) => {
    const { email} = req.body;

    const pool = await getConnection();
    const result = await pool
    .request()
    .input("email", sql.VarChar, email)
    .query('SELECT Usuario.id_Tenant FROM USUARIO WHERE USUARIO.email_Usuario = @email');
    console.log(result);

    res.json(result.recordset);
};

