import { Cafe } from "../../entities/Cafe/Cafe";
import CafeCreateRequest from "../../types/Cafe/CafeCreateRequest";
import CafeUpdateRequest from "../../types/Cafe/CafeUpdateRequest";
import BaseRepository from "../BaseRepository";
import db from "../db";

class CafeRepository implements BaseRepository {
    public connection: db;

    constructor(connection: db){
        this.connection = connection;
    }

    getAllCafe = async () => {
        return this.connection.getConnection().then( async () => {
            const allCafe = await Cafe.find();
            return allCafe;
        })
    }

    createCafe = async (userId: string, cafeCreateRequest: CafeCreateRequest) => {
        return this.connection.getConnection().then( async () => {
            const createdCafe:Cafe = Cafe.create({...cafeCreateRequest, writerId: userId});
            await createdCafe.save();
            return createdCafe;
        })
    }

    getCafeByCafeId = async (cafeId: number) => {
        return this.connection.getConnection().then( async () => {
            const cafeMaybe = await Cafe.findOne({
                where : {
                    cafeId
                }
            })

            return cafeMaybe;
        })
    }

    getAllCafeByUserId = async (userId: string) => {
        return this.connection.getConnection().then( async () => {
            const cafeListMaybe = await Cafe.find({
                where : {
                    writerId: userId
                }
            })

            return cafeListMaybe;
        })
    }

    updateCafeByCafeId = async (cafeId: number, userId: string, cafeUpdateRequest: CafeUpdateRequest) => {
        return this.connection.getConnection().then( async () => {
            const updatedCafe = await Cafe.update({ cafeId }, { ...cafeUpdateRequest, writerId: userId});
            if(!updatedCafe){
                return null;
            }
            return updatedCafe;
        })
    }

    deleteCafeByCafeId = async (cafeId: number, userId: string) => {
        this.connection.getConnection().then( async () => {
            await Cafe.delete({ cafeId, writerId: userId });
        })
    }
}

export default CafeRepository;