import {getConnection} from "../database/connection"

export const getTenants = async (req,res) => {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM TENANT');
    console.log(result);

    res.json(result.recordset);
};

