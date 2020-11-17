import "reflect-metadata";
import { createConnection } from "typeorm";

class db {
      public connect(){
        createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: "studiable",
            entities: [
                "./../entities/**/*.ts"
            ],
            synchronize: true,
            logging: false
        })
        .then(() => {
            console.log('db connected...');
        })
        .catch((err)=> {
            console.log('db error...', err);
        })
    }
}

export default db;