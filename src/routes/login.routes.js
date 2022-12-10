import { Router } from "express";
import { getRol, postLogin, postLogin1, verifyToken } from "../controllers/login.controller";

const router = Router();

router.post('/login', postLogin)
router.post('/login1', postLogin1)
router.post('/logintest', verifyToken)
router.get('/get-rol', getRol)

export default router