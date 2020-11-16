import dotenv from "dotenv";

class EnvConfigs{
    constructor(){
       this.enable(); 
    }
    private enable(){
        console.log('env enabled...');
        dotenv.config();
    }
}

export default EnvConfigs;