import { basicController } from '../basicController';
import express, { Request, Response } from "express";
import CustomException from '../../exceptions/CustomException';
import AuthController from '../Auth/AuthController';
import CommentService from '../../services/Comment/CommentService';
import CreateCommentRequestType from '../../types/Comment/CreateCommentRequestType';
import DeleteCommentRequestType from '../../types/Comment/DeleteCommentRequestType';

class CommentController implements basicController{
    public url = "/comment";
    public controller = express.Router(); 
    public authController: AuthController;
    public commentService: CommentService;
    
    constructor(commentService: CommentService, authController: AuthController) {
        this.commentService = commentService;
        this.authController = authController;
        this.init();
    }

    public init(){
        this.controller.post("/create", this.authController.requireAuth, this.createComment);
        this.controller.post("/", this.authController.requireAuth, this.readCommentsByCafeId);
        this.controller.delete("/", this.authController.requireAuth, this.deleteComment);
    }

    // create comment by userId, cafeId
    createComment = async (req: Request, res: Response) => {
        const { user, cafeId, commentContent }: CreateCommentRequestType = req.body;

        await this.commentService.createComment(user.userId, cafeId, commentContent)
        .then(() => {
            res.json({ mesasge: "댓글을 성공적으로 작성했습니다."});
        })
        .catch((err: CustomException) => {
            res.status(err.status).json({ message: err.message});
        })
    }

    // read comments by cafeId
    readCommentsByCafeId = async (req: Request, res: Response) => {
        const { cafeId } = req.body;

        await this.commentService.readCommentsByCafeId(cafeId)
        .then((resp) => {
             res.json({ cafeFound: resp });
        })
        .catch((err:CustomException) => {
            res.status(err.status).json({ message: err.message });
        })
    }

    // delete comment by userId, cafeId
    deleteComment = async (req: Request, res: Response) => {
        const { cafeId, commentId, user } : DeleteCommentRequestType  = req.body;

        const userId = user.userId;

        await this.commentService.deleteComment(cafeId, userId, commentId)
        .then(() => {
            return res.json({ message: "댓글을 성공적으로 삭제했습니다."});
        })
        .catch((err:CustomException) => {
            res.status(err.status).json({ message: err.message });
        })
    }
}

export default CommentController;