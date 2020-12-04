import dotenv from 'dotenv';
import express from "express";
import cors from "cors";
import App from "./App";
import db from "./dto/db";
import EnvConfig from "./configs/dotenv/EnvConfig";
import corsConfig from "./configs/cors/corsConfig";
import AuthController from "./controllers/Auth/AuthController";
import AuthService from "./services/Auth/AuthService";
import UserRepository from "./dto/User/UserRepository";
import AuthRepository from "./dto/Auth/AuthRepository";
import BcryptEncoder from "./utils/BcryptEncoder";
import JwtService from './utils/JwtService';
import cookieParser from "cookie-parser";
import CafeController from './controllers/Cafe/CafeController';
import CafeService from './services/Cafe/CafeService';
import CafeRepository from './dto/Cafe/CafeRepository';
import CommentController from './controllers/Comment/CommentController';
import CommentService from './services/Comment/CommentService';
import CommentRepository from './dto/Comment/CommentRepository';
import LikeController from './controllers/Like/LikeController';
import LikeService from './services/Like/LikeService';
import LikeRepository from './dto/Like/LikeRepository';

dotenv.config();
const dbCore = new db();

const likeRepository = new LikeRepository(dbCore);
const cafeRepository = new CafeRepository(dbCore);
const commentRepository = new CommentRepository(dbCore);
const userRepository = new UserRepository(dbCore);
const likeService = new LikeService(likeRepository, cafeRepository);
const commentService = new CommentService(commentRepository, userRepository, cafeRepository);
const cafeService = new CafeService(cafeRepository);
const jwtService = new JwtService(process.env.JWT_KEY || "secret", process.env.JWT_EXPIRE_DATE || "3600");
const bcryptEncoder = new BcryptEncoder(process.env.BCRYPT_SALT || "10");
const authRepository = new AuthRepository(dbCore);
const authService = new AuthService(authRepository, userRepository, bcryptEncoder, jwtService);
const authController = new AuthController(authService);
const cafeController = new CafeController(cafeService, authController);
const commentController = new CommentController(commentService, authController);
const likeController = new LikeController(likeService, authController);

const appConfig = {
   port: 5000,
   routes: [
       authController,
       cafeController,
       commentController,
       likeController
   ],
   middlewares: [
       cors(corsConfig),
       express.json(),
       express.urlencoded({ extended: false }),
       cookieParser()
   ],
   db: dbCore,
   envConfig: new EnvConfig()
}

const app: App = new App(appConfig);

app.listen();