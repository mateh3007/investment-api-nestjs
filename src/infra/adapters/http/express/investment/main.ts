import { Router } from "express";
import investmentRoutes from "./routes";

const investmentRouter = Router();

investmentRouter.use(investmentRoutes);

export default investmentRouter;
