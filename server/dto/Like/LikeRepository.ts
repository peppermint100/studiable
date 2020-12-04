import { Like } from "../../entities/Like/Like";
import BaseRepository from "../BaseRepository";
import db from "../db";

class LikeRepository implements BaseRepository {
    public connection: db;

    constructor(connection: db){
        this.connection = connection;
    }

    hitLike= async (userId: string, cafeId: number) => {
        await this.connection.getConnection()
        .then(async () => {
            const likeMaybe = Like.findOne({ userId, cafeId });

            if(!likeMaybe){
                await Like.create({ userId, cafeId }).save();
            }
        })
        .catch(err => {
            throw new Error(err.message);
        })
    }

    unhitLike= async (userId: string, cafeId: number) => {
        await this.connection.getConnection()
        .then(async () => {
            const likeMaybe = Like.findOne({ userId, cafeId });

            if(likeMaybe){
                await Like.delete({ userId, cafeId });
            }
        })
        .catch(err => {
            throw new Error(err.message);
        })
    }
}

export default LikeRepository;