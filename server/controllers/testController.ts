import { basicController } from './basicController';
import express, { Request, Response } from "express";

class testController implements basicController{
    public url = "/test";
    public controller = express.Router(); 
    
    constructor() {
        this.init();
    }

    public init(){
        this.controller.get("/", this.index);
    }

    index = (req: Request, res: Response) => {
        console.log('you are here'); 
        res.send("test succeed");
    }
}

export default testController