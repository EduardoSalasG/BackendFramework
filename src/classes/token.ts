import jwt from'jsonwebtoken'

export default class Token{
    private static seed: string = 'Secreto';
    private static expires:string = '30m';

    constructor(){}

    static getJwtToken(payload:any){
        return jwt.sign({
            user: payload
        }, this.seed,{expiresIn:this.expires})
    };

    static async validateToken(userToken:string){
        return new Promise((resolve,reject)=>{
            jwt.verify(userToken,this.seed,(err,decoded)=>{
                if(err){
                    reject();
                }else{
                    resolve(decoded);
                }
            })
        })
    }
    
}