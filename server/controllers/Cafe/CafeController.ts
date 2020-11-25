import { basicController } from '../basicController';
import express, { Request, Response } from "express";
import CustomException from '../../exceptions/CustomException';
import CafeService from '../../services/Cafe/CafeService';
import CafeCreateRequest from '../../types/Cafe/CafeCreateRequest';
import AuthController from '../Auth/AuthController';

class CafeController implements basicController{
    public url = "/cafe";
    public controller = express.Router(); 
    public cafeService: CafeService;
    public authController: AuthController;
    
    constructor(cafeService: CafeService, authController: AuthController) {
        this.cafeService = cafeService;
        this.authController = authController;
        this.init();
    }

    public init(){
        this.controller.get("/getallcafe", this.getAllCafe);
        this.controller.post("/createcafe", this.authController.requireAuth ,this.createCafe);
    }

    getAllCafe = async (req: Request, res:Response) => {
       const cafe = await this.cafeService.getAllCafe(); 
       return res.json({message: "hello", cafe});
    }

    createCafe = async (req: Request, res: Response) => {
        const cafeCreateRequest: CafeCreateRequest = req.body;
        console.log("controller request: ", cafeCreateRequest);
        await this.cafeService.createCafe(cafeCreateRequest)
        .then(() => {
            res.json({ message: "성공적으로 카페를 업로드했습니다."});
        })
        .catch((err: CustomException) => {
            if(err) res.status(err.status).json({ message: err.message});
        })
    }
}

export default CafeController;