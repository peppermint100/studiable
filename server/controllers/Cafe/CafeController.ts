import { basicController } from '../basicController';
import express, { Request, Response } from "express";
import CustomException from '../../exceptions/CustomException';
import CafeService from '../../services/Cafe/CafeService';

class CafeController implements basicController{
    public url = "/cafe";
    public controller = express.Router(); 
    public cafeService: CafeService;
    
    constructor(cafeService: CafeService) {
        this.init();
        this.cafeService = cafeService;
    }

    public init(){
        this.controller.get("/getallcafe", this.getAllCafe);
    }

    getAllCafe = async () => {
       const res = await this.cafeService.getAllCafe(); 
       console.log(res);
    }
}

export default CafeController;