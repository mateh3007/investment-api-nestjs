import { Router } from "express";
import investmentRouter from "./investment/main";

const router = Router();

router.use(investmentRouter);

export default router;
