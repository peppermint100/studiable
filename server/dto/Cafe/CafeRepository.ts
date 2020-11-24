import { Cafe } from "../../entities/Cafe/Cafe";
import BaseRepository from "../BaseRepository";
import db from "../db";

class CafeRepository implements BaseRepository {
    public connection: db;

    constructor(connection: db){
        this.connection = connection;
    }

    getAllCafe = async () => {
        this.connection.getConnection().then( async () => {
            const allCafe = await Cafe.find();
            return allCafe;
        })
    }
}

export default CafeRepository;