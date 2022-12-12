import { validateToken } from "../controllers/login.controller";

export const Authentication = async (req, res,next)=>{
    const userToken = req.get('token') || '';
    await validateToken(userToken)
    .then((decoded)=>{
        console.log('Decoded',decoded);
        req.user = decoded.user;
        next();
    }).catch(err=>{
        res.json({
            ok: false,
            msj:"Token invalido"
        })
    })
}