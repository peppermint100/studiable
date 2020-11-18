import { Connection } from "typeorm";
import { User } from "../../entities/User/User";
import FilteredRegisterRequest from "../../types/Auth/FilteredRegisterRequest";
import BaseRepository from "../BaseRepository";
import db from "../db";

class AuthRepository implements BaseRepository {
    public connection: db;

    constructor(connection: db){
        this.connection = connection;
    }

    signup(filterRegisterRequest: FilteredRegisterRequest){
        this.connection.getConnecton().then( async () => {
            const createdUser = await User.create({
                ...filterRegisterRequest
            }).save();
        })
    } 
}

export default AuthRepository;