import { Router} from "express";
import {getTenantbyId, getTenants} from "../controllers/tenants.controller"

const router = Router();

router.get('/tenants', getTenants)
router.post('/tenant-by-id', getTenantbyId)

// router.post('/tenants', getTenants)

// router.get('/tenants', getTenants)

// router.delete('/tenants', getTenants)

// router.put('/tenants', getTenants)


export default router