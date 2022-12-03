import { Router } from "express";
import { postOpcionMenu } from "../controllers/opcionMenu.controller";

const router = Router();

router.post('/opcion-menu', postOpcionMenu)

export default router