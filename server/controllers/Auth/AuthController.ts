import { basicController } from '../basicController';
import express, { Request, Response } from "express";
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
        this.controller.post("/login", this.login);
        this.controller.post("/signup", this.signup);
    }

    // create method as arrow function to bind this automatically
    signup = async (req: Request, res: Response) => {
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

    login = async (req: Request, res: Response) => {
        const loginRequest: LoginRequest = req.body;
        await this.authService.login(loginRequest)
        .then(resp => {
            res.cookie('Authorization', resp).json({ message: "로그인에 성공했습니다."});
        }).catch((err: CustomException) => {
            if(err){
                res.status(err.status).json({ message: err.message })
            }
        })
    }

}

export default AuthController;