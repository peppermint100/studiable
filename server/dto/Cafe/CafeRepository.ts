import { resolve } from "path";
import { AdvancedConsoleLogger } from "typeorm";
import { Cafe } from "../../entities/Cafe/Cafe";
import CustomException from "../../exceptions/CustomException";
import CafeCreateRequest from "../../types/Cafe/CafeCreateRequest";
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

    createCafe = async (cafeCreateRequest: CafeCreateRequest) => {
        const { user: { userId }} = cafeCreateRequest;
        this.connection.getConnection().then( async () => {
            const createdCafe:Cafe = Cafe.create({...cafeCreateRequest, writerId: userId});
            await createdCafe.save();
        })
    }
}

export default CafeRepository;