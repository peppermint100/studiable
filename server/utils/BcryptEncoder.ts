import bcrypt from "bcrypt";

class BcryptEncoder {
    private salt: string;

    constructor(salt: string){
        this.salt = salt;
    }

    async encode(target: string){
        try{
            const result = await bcrypt.hash(target, parseInt(this.salt));
            return result;
        }catch(err){
            return null;
        }
    }

    async compare(plain: string, hashed: string){
        const result = await bcrypt.compare(plain, hashed);
        return result;
    }
}

export default BcryptEncoder;