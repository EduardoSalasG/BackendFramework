import express from 'express'
import config from './config'
import opcionMenuRoutes from './routes/opcionMenu.routes';
import tenantsRoutes from "./routes/tenants.routes";
import loginRoutes from "./routes/login.routes";
import cors from 'cors'

const app = express()

//settings
app.set('port', config.port)

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(cors())
app.use(tenantsRoutes)
app.use(opcionMenuRoutes)
app.use(loginRoutes)

export default app