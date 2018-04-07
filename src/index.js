import express from "express";
import { router } from "./middlewares/routers"

export class Main {
    constructor(){
        this.app = express();
    }

    init(){
        this.app.use("/",router);
    }
}

const main = new Main().init();

