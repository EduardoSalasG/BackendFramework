import sql from "mssql";

const dbSettings = {
    user: 'theUser',
    password: 'userPass',
    server: 'localhost',
    database: 'Framework',
  options: {
    encrypt: true, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

export async function getConnection() {
    try{
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch(error){
        console.error(error)
    }


}

getConnection();

export {sql};