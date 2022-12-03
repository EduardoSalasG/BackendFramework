import { getConnection, sql} from "../database/connection";

export const postLogin = async (req, res) => {

    const { tenant, email, password} = req.body;

    if(tenant == null || email == null || password == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }
    // console.log(tenant, email)
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("tenant", sql.Int, tenant)
        .input("email", sql.VarChar, email)
        .input("password", sql.VarChar, password)
        .query(`EXEC dbo.sp_autenticar_usuario @tenant, @email, @password`);

    res.json(result.recordset);
}    