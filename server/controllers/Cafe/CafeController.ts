import { basicController } from '../basicController';
import express, { Request, Response } from "express";
import CustomException from '../../exceptions/CustomException';
import CafeService from '../../services/Cafe/CafeService';
import CafeCreateRequest from '../../types/Cafe/CafeCreateRequest';
import AuthController from '../Auth/AuthController';
import { Cafe } from '../../entities/Cafe/Cafe';
import CafeUpdateRequest from '../../types/Cafe/CafeUpdateRequest';

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
        this.controller.get("/", this.getAllCafe);
        this.controller.post("/create", this.authController.requireAuth ,this.createCafe);
        this.controller.get("/:cafeId", this.authController.requireAuth ,this.getCafeByCafeId)
        this.controller.post("/:userId", this.authController.requireAuth ,this.getAllCafeByUserId)
        this.controller.put("/update/:cafeId", this.authController.requireAuth ,this.updateCafeByCafeId);
        this.controller.delete("/delete/:cafeId", this.authController.requireAuth, this.deleteCafeByCafeId);
    }

    getAllCafe = async (_: any, res:Response) => {
       const cafe = await this.cafeService.getAllCafe(); 

       return res.json({cafe});
    }

    createCafe = async (req: Request, res: Response) => {
        const cafeCreateRequest: CafeCreateRequest = req.body;
        await this.cafeService.createCafe(cafeCreateRequest)
        .then((cafe: Cafe | void) => {
            res.json({ message: "성공적으로 카페를 업로드했습니다.", cafe});
        })
        .catch((err: CustomException) => {
            if(err) res.status(err.status).json({ message: err.message});
        })
    }

    getAllCafeByUserId = async (req: Request, res: Response) => {
        const { userId } = req.params;
        
        await this.cafeService.getAllCafeByUserId(userId)
        .then((resp: Array<Cafe>) => {
            res.json({ cafe: resp});
        }) 
        .catch((err:CustomException) => {
            if(err){
                res.status(err.status).json({ message: err.message });
            }
        })
    }
    
    // read
    getCafeByCafeId = async (req: Request, res: Response) => {
        const { cafeId } = req.params;
        
        await this.cafeService.getCafeByCafeId(parseInt(cafeId))
        .then((cafe: Cafe | void) => {
            res.json({ message: "카페 정보를 성공적으로 불러왔습니다.", cafe});
        })
        .catch((err: CustomException) => {
            if(err) res.status(err.status).json({ message: err.message});
        })
    }

    // update
    updateCafeByCafeId = async (req: Request, res: Response) => {
        const { cafeId } = req.params;
        const cafeUpdateRequest: CafeUpdateRequest = req.body;

        await this.cafeService.updateCafeByCafeId(parseInt(cafeId), cafeUpdateRequest)
        .then(() => {
            res.json({ message: "성공적으로 카페를 업로드했습니다."});
        })
        .catch((err: CustomException) => {
            if(err) res.status(err.status).json({ message: err.message});
        })
    }

    // delete
    deleteCafeByCafeId = async (req: Request, res: Response) => {
        const { cafeId } = req.params;
        const { user : { userId }} = req.body;

        await this.cafeService.deleteCafeByCafeId(parseInt(cafeId), userId)
        .then(() => {
            res.json({ message: "성공적으로 카페를 삭제했습니다."});
        })
        .catch((err:CustomException) => {
            if(err) res.status(err.status).json({ message: err.message});
        })
    }
}

export default CafeController;