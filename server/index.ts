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

dotenv.config();

const bcryptEncoder = new BcryptEncoder(process.env.BCRYPT_SALT!);
const dbCore = new db();
const userRepository = new UserRepository(dbCore);
const authRepository = new AuthRepository(dbCore);
const authService = new AuthService(authRepository, userRepository, bcryptEncoder);
const authController = new AuthController(authService);

const appConfig = {
   port: 5000,
   routes: [
       authController
   ],
   middlewares: [
       cors(corsConfig),
       express.json(),
       express.urlencoded({ extended: false})
   ],
   db: dbCore,
   envConfig: new EnvConfig()
}

const app: App = new App(appConfig);

app.listen();