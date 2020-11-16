import "reflect-metadata";
import { createConnection } from "typeorm";

class db {
      public connect(){
        createConnection()
        .then(() => {
            console.log('db connected...');
        })
        .catch((err)=> {
            console.log(console.log('db error...'));
        })
    }
}

export default db;