import express from "express";
import cors from "cors";
import App from "./App";
import testController from "./controllers/testController";
import db from "./dto/db";

const appConfig = {
   port: 5000,
   routes: [
       new testController()
   ],
   middlewares: [
       cors(),
       express.json()
   ],
   db
}

const app: App = new App(appConfig);

app.listen();