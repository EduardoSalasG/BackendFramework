const jwt = require('jsonwebtoken')

export default class Token{
    private static seed: string = 'Secreto';
    private static expires:string = '5m';

    constructor(){}

    static getJwtToken(payload:any){
        return jwt.sign({
            user: payload
        }, this.seed,{expiresIn:this.expires})
    };
}