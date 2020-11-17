import express from "express";
import cors from "cors";
import App from "./App";
import testController from "./controllers/testController";
import db from "./dto/db";
import EnvConfig from "./configs/dotenv/EnvConfig";
import corsConfig from "./configs/cors/corsConfig";

const appConfig = {
   port: 5000,
   routes: [
       new testController()
   ],
   middlewares: [
       cors(corsConfig),
       express.json()
   ],
   db: new db(),
   envConfig: new EnvConfig()
}

const app: App = new App(appConfig);

app.listen();