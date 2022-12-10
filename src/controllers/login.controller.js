import { getConnection, sql} from "../database/connection";

const jwt = require('jsonwebtoken');
const seed = 'Secreto'

export const postLogin = async (req, res) => {

    const { email, password} = req.body;

    if(email == null || password == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }
    // console.log(tenant, email)
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("email", sql.VarChar, email)
        .input("password", sql.VarChar, password)
        .query(`EXEC dbo.sp_autenticar_usuario @email, @password`);

    res.json(result.recordset[0]);
}    

export const postLogin1 = async (req, res) => {

    const { email, password} = req.body;

    if(email == null || password == null){
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }
    // console.log(tenant, email)
    const pool = await getConnection();
    const result = await pool
        .request()
        .input("email", sql.VarChar, email)
        .input("password", sql.VarChar, password)
        .query(`EXEC dbo.autenticar_usuario1 @email, @password`);

    const token = jwt.sign({
        id_Usuario: result.recordset[0].id_Usuario,
        nombre_Usuario: result.recordset[0].nombre_Usuario,
        email_usuario: result.recordset[0].email_usuario,
        id_Tenant: result.recordset[0].id_Tenant,
        nombre_Tenant: result.recordset[0].nombre_Tenant,
        id_Rol: result.recordset[0].id_Rol,
        nombre_Rol: result.recordset[0].nombre_Rol

    }, seed, {expiresIn:'5m'})

    console.log(result)
    return res.json({ 
        Code: result.recordset[0].Code,
        Response: result.recordset[0].Response,
        token: token
    })
}    

export const verifyToken = (req,res) => {
    if(!req.headers.authorization){
        return res.status(401).send('Inicie sesión')
    }

    const token = req.headers.authorization.split(' ')[1]
    if (token === 'null'){
        return res.status(401).send('Inicie sesión')
    }

    const payload = jwt.verify(token, seed)
    console.log(payload)
    req.id_Usuario = payload.id_Usuario;
    req.id_Rol = payload.id_Rol;
    console.log(req.id_Rol)

}

const getJwtToken = (payload) => {}

export const getRol = async (req,res) =>{
    verifyToken(req,res)
    const user = {
        id_Rol: req.id_Rol
    }
    console.log(user)
    return res.json(user)
}
