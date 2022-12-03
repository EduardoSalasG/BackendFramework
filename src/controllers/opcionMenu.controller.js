import { getConnection, sql} from "../database/connection";

export const postOpcionMenu = async (req, res) => {

    const { tenant, email} = req.body;

    if(tenant == null || email == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }
    // console.log(tenant, email)
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("tenant", sql.Int, tenant)
        .input("email", sql.VarChar, email)
        .query(`EXEC dbo.sp_consulta_permisos @tenant, @email`);

    res.json(result.recordset);
}    