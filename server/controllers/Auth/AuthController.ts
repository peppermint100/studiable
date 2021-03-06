import { basicController } from '../basicController';
import express, { NextFunction, Request, Response } from "express";
import RegisterRequest from '../../types/Auth/RegisterRequest';
import AuthService from '../../services/Auth/AuthService';
import LoginRequest from '../../types/Auth/LoginRequest';
import CustomException from '../../exceptions/CustomException';
import LoginReceiveData from '../../types/Auth/LoginReceiveData';

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
        this.controller.post("/signup", this.signUp);
        this.controller.post("/me", this.me);
        this.controller.post("/getauth", this.requireAuth);
    }

    // create method as arrow function to bind this automatically
    signUp = async (req: Request, res: Response) => {
        const registerRequest: RegisterRequest = req.body;

        await this.authService.signup(registerRequest)
        .then(() => {
            res.json({ message: "회원가입에 성공했습니다. 로그인 해주세요."});
        }).catch((err:CustomException) => {
            if(err){
                res.status(err.status).send({ message: err.message });
            }
        });
    }

    login = async (req: Request, res: Response) => {
        const loginRequest: LoginRequest = req.body;
        await this.authService.login(loginRequest)
        .then(({ token, username, email, userId }: LoginReceiveData) => {
            res.cookie('Authorization', token).json({ message: "로그인에 성공했습니다.", username, email, userId});
        }).catch((err: CustomException) => {
            if(err){
                res.status(err.status).json({ message: err.message });
            }
        })
    }

    me = async (req: Request, res: Response) => {
            const token = req.cookies.Authorization;
            
            await this.authService.getAuth(token)
            .then(resp => {
                res.json(resp);
            })
            .catch((err: CustomException) => {
                if(err){
                    res.status(403).json({ message: "로그인이 필요합니다."});
                }
            });
    }

    requireAuth = async (req: Request, res: Response, next: NextFunction) => {
        const token = req.cookies.Authorization;
        
        await this.authService.getAuth(token)
        .then(res => {
            const { username, userId, email }: any = res;
            req.body.user = { username, userId, email };
            next();
        })
        .catch((err: CustomException) => {
            if(err){
                res.status(403).json({ message: "로그인이 필요합니다."});
            }
        });
    }
}

export default AuthController;