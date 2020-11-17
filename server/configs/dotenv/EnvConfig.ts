import dotenv from "dotenv";

class EnvConfigs{
    private enable(){
        console.log('env enabled...');
        dotenv.config();
    }
}

export default EnvConfigs;