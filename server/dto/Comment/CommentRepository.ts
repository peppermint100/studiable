import BaseRepository from "../BaseRepository";
import db from "../db";
import { Comment } from "./../../entities/Comment/Comment";

class CommentRepository implements BaseRepository {
    public connection: db;

    constructor(connection: db){
        this.connection = connection;
    }

    getCommentById = async (commentId: string) => {
        return await this.connection.getConnection()
        .then( async () => {
            return await Comment.findOne({ where : { commentId }});
        })
        .catch(((err: Error) => {
           if(err){
               throw new Error(err.message);
           }
        }))
    }

    createComment = async (userId: string, cafeId: number, commentContent: string) => {
        await this.connection.getConnection()
        .then( async () => {
            await Comment.create({ ownerId: userId, cafeId, commentContent }).save();
        })
        .catch((err:Error) => {
            if(err){
                throw new Error(err.message);
            }
        })
    }

    readCommentsByCafeId = async (cafeId: number) => {
        return await this.connection.getConnection()
            .then( async () => {
                const commentFound = Comment.find({ where : {
                    cafeId
                }});

                return commentFound;
            })
            .catch((err:Error) => {
                if(err){
                    throw new Error(err.message);
                }
            })
    }
    deleteComment = async (commentId: string) => {

        await this.connection.getConnection()
            .then( async () => {
                await Comment.delete({ commentId });
            })
            .catch((err:Error) => {
                if(err){
                    throw new Error(err.message);
                }
            })
    }

}

export default CommentRepository;