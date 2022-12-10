import { Router } from "express";
import { postOpcionMenu, consultaModuloPorRol, consultaOpMenuPorRol } from "../controllers/opcionMenu.controller";

const router = Router();

router.post('/opcion-menu', postOpcionMenu)
router.post('/consulta-modulo-por-rol', consultaModuloPorRol)
router.post('/consulta-opMenu-por-rol', consultaOpMenuPorRol)



export default router