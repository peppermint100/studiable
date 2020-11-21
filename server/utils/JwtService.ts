import jwt from "jsonwebtoken";

class JwtService {
    private key: string;
    private expireDate: string;

    constructor(key: string, expireDate: string){
        this.key = key;
        this.expireDate = expireDate;
    }
    
    sign(email: string, username: string){
        let token = jwt.sign({
            email,
            username
        }, this.key, {expiresIn: parseInt(this.expireDate)})

        return token;
    }

    verify(token: string){
        const decoded = jwt.verify(token, this.key); 

        return decoded;
    }
}

export default JwtService;