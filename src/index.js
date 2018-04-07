import express from "express";
import { router } from "./middlewares/routers"

export class Main {
    constructor(){
        this.app = express();
    }

    init(){
        this.app.use("/",router);
        this.app.listen(8080,"localhost");
    }
}

var main = new Main().init();

