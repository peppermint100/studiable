import { basicController } from '../basicController';
import express, { Request, Response, NextFunction } from "express";
import RegisterRequest from '../../types/Auth/RegisterRequest';
import AuthService from '../../services/Auth/AuthService';

class AuthController implements basicController{
    public url = "/auth";
    public controller = express.Router(); 
    
    private authService: AuthService;
    
    constructor(authService: AuthService) {
        this.init();
        this.authService = authService;
    }

    public init(){
        this.controller.post("/signup", this.signup);
    }

    signup = async (req: Request, res: Response) => {
        const registerRequest: RegisterRequest = req.body;

        await this.authService.signup(registerRequest)
        .then(resp => {
            console.log(resp);
            res.json({ message: "회원가입에 성공했습니다."});
        }).catch(err => {
            if(err){
                res.status(406).json({ message: err.message })
            }
        });
        

    }
}

export default AuthController;