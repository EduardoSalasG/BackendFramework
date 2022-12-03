import { Router} from "express";
import {getTenants} from "../controllers/tenants.controller"

const router = Router();

router.get('/tenants', getTenants)

// router.post('/tenants', getTenants)

// router.get('/tenants', getTenants)

// router.delete('/tenants', getTenants)

// router.put('/tenants', getTenants)


export default router