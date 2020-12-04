import { basicController } from '../basicController';
import express, { Request, Response } from "express";
import CustomException from '../../exceptions/CustomException';
import LikeService from '../../services/Like/LikeService';
import AuthController from '../Auth/AuthController';
import HitLikeButtonRequestType from '../../types/Like/HitLikeButtonRequestType';

class LikeController implements basicController{
    public url = "/like";
    public controller = express.Router(); 
    public likeService: LikeService;
    public authController: AuthController;
    
    constructor(likeService: LikeService, authController: AuthController) {
        this.likeService = likeService;
        this.authController = authController;
        this.init();
    }

    public init(){
        this.controller.post("/on", this.authController.requireAuth, this.hitLike);
        this.controller.post("/off", this.authController.requireAuth, this.unhitLike);
    }

    // userId, cafeId
    hitLike= async (req: Request, res: Response) => {

        const { cafeId, user } : HitLikeButtonRequestType = req.body;

        const userId = user.userId;

        await this.likeService.hitLike(userId, cafeId)
        .then(() => {
            return;
        })
        .catch((err: CustomException) => {
            return;
        })
    }

    unhitLike= async (req: Request, res: Response) => {

        const { cafeId, user } : HitLikeButtonRequestType = req.body;

        const userId = user.userId;

        await this.likeService.unhitLike(userId, cafeId)
        .then(() => {
            return;
        })
        .catch((err: CustomException) => {
            return;
        })
    }
}

export default LikeController;