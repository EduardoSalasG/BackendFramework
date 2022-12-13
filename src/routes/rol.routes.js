import { Router } from "express";
import { deleteOpcionMenuByIdRol, getModules, getOpsMenu, getRolesByIdTenant, setOpmenuByRolId, updateRolByIdUsuario } from "../controllers/rol.controller";

const router = Router();

router.post('/get-roles-by-tenant',getRolesByIdTenant)
router.post('/update-rol-by-id-usuario',updateRolByIdUsuario)
router.post('/delete-opcionmenu-by-id-rol',deleteOpcionMenuByIdRol)
router.post('/set-opmenu-by-rol-id',setOpmenuByRolId)
router.get('/get-modules',getModules)
router.get('/get-opsmenu',getOpsMenu)

export default router