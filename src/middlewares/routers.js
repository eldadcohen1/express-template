import { Router } from 'express';
import { MainController } from '../controllers/main-controller'

export const router = Router();

router.get("/",MainController.mainRequest);