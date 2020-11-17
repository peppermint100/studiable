import express from "express";

class App {
    private app: express.Application;
    private port: number;

    constructor(appConfig : { 
        port: number
        , middlewares: Array<any>
        , routes: Array<any>
        , db: any
        , envConfig: any}){
        this.app = express();
        this.port = appConfig.port;
        this.applyMiddlewares(appConfig.middlewares);
        this.applyDB(appConfig.db);
        this.enableConfig(appConfig.envConfig);
        this.applyRoutes(appConfig.routes);
    }

    private enableConfig(envConfig: any){
        envConfig.enable();
    }

    private async applyDB(db: any){
        await db.connect();
    }

    private applyMiddlewares(middlewares: any){
        middlewares.forEach((middleware: any) => {
            this.app.use(middleware);
        })
    }

    private applyRoutes(routes: any){
        routes.forEach((route: any) => {
            this.app.use(route.url, route.controller);
        })
    }

    public listen(){
        this.app.listen(this.port, () => {
            console.log(`server started on PORT ${this.port}`);
        })
    }
}

export default App;