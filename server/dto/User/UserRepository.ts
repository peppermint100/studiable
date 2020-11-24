import { User } from './../../entities/User/User';
import BaseRepository from "../BaseRepository";
import db from "../db";

class UserRepository implements BaseRepository {
    public connection: db;

    constructor(connection:db){
        this.connection = connection;
    }
    
    async getUserById(userId: string){
        await this.connection.getConnection().then( async conn => {
            const userMaybe = await User.findOne({
                where: {
                    userId
                }
            });

            if(!!userMaybe){
                return userMaybe;
            }

            return null;
        })
    }

    async getUserByEmail(email: string){
        const userMaybe = await User.findOne({
            where: {
                email
            }
        })

        if(!!userMaybe){
            return userMaybe;
        }

        return null;
    }
}

export default UserRepository;