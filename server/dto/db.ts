import "reflect-metadata";
import { Connection, createConnection } from "typeorm";

class db {
    private connection: Promise<Connection>;

    constructor(){
        this.connection = new Promise((resolve, reject) => {
            createConnection({
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "root",
                database: "studiable",
                entities: [
                    "./entities/**/*.ts"
                ],
                synchronize: true,
                logging: true
            }).then( res => {
                resolve(res);
            }).catch(err => {
                if(err){
                    reject(err);
                }
            })
        })

    }

    public connect(){
        this.connection 
        .then(() => {
            console.log('db connected...');
        })
        .catch((err)=> {
            console.log('db error...', err);
        })
    }

    public getConnecton(){
        return this.connection;
    }

    public sync(){
        this.connection.then(res => res.synchronize());
    }
}

export default db;