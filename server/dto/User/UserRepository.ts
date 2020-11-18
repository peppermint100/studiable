import { User } from './../../entities/User/User';
import { Connection } from "typeorm";
import BaseRepository from "../BaseRepository";
import db from "../db";

class UserRepository implements BaseRepository {
    public connection: db;

    constructor(connection:db){
        this.connection = connection;
    }
    
    async getUserById(userId: string){
        this.connection.getConnecton().then( async conn => {
            const userMaybe = await User.findOne({
                where: {
                    userId
                }
            });

            if(!userMaybe){
                throw new Error("존재하지 않는 유저입니다.");
            }

            return userMaybe;
        })
    }

    getUserByEmail(email: string){
            this.connection.getConnecton().then( async conn => {
                const userMaybe = await User.findOne({
                    where: {
                        email
                    }
                });

                if(!userMaybe){
                    return null;
                }

                return userMaybe;
            })

            return null;
        }
}

export default UserRepository;