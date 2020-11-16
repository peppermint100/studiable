import express from "express";
import cors from "cors";
import App from "./App";
import testController from "./controllers/testController";

const appConfig = {
   port: 5000,
   routes: [
       new testController()
   ],
   middlewares: [
       cors(),
       express.json()
   ] 
}

const app: App = new App(appConfig);

app.listen();