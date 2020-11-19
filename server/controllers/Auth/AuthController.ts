import { basicController } from '../basicController';
import express, { Request, Response, NextFunction } from "express";
import RegisterRequest from '../../types/Auth/RegisterRequest';
import AuthService from '../../services/Auth/AuthService';
import LoginRequest from '../../types/Auth/LoginRequest';
import CustomException from '../../exceptions/CustomException';

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
        this.controller.post("/login", this.login);
    }

    async signup(req: Request, res: Response){
        const registerRequest: RegisterRequest = req.body;

        await this.authService.signup(registerRequest)
        .then(resp => {
            res.json({ message: "회원가입에 성공했습니다."});
        }).catch((err:CustomException) => {
            if(err){
                res.status(err.status).json({ message: err.message })
            }
        });
    }

    async login(req: Request, res: Response){
        const loginRequest: LoginRequest = req.body;
        
        await this.authService.login(loginRequest)
        .then(resp => {
            // send jwt as cookie data
            // send succeed message
        }).catch((err: CustomException) => {
            if(err){
                res.status(err.status).json({ message: err.message })
            }
        })
    }
}

export default AuthController;