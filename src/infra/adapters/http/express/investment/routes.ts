import { Router, Request, Response } from "express";
import { InvestmentRepositoryInMemory } from "../../../../db/investments/test/investment.repository-in-memory";
import { CreateInvestmentUseCase } from "../../../../../core/investments/use-case/create-investment/create-investment.use-case";
import {
  CreateInvestmentDtoInput,
  CreateInvestmentDtoOutput,
} from "../../../../../core/investments/dto/create-investment.dto";
import { SeeEarningsInvestmentUseCase } from "../../../../../core/investments/use-case/see-earnings/see-earnings-investment.use-case";

const investmentRoutes = Router();

investmentRoutes.post(
  "/create-investment",
  async (req: Request, res: Response) => {
    try {
      const data: CreateInvestmentDtoInput = req.body;
      const repository = new InvestmentRepositoryInMemory();

      const useCase = new CreateInvestmentUseCase(repository);
      const output = await useCase.handle(data);

      return res.json(output);
    } catch (err) {
      return res.status(500).json({ error: err }), console.log(err);
    }
  }
);

investmentRoutes.get("/see-earnings", async (req: Request, res: Response) => {
  const repository = new InvestmentRepositoryInMemory();
  const useCase = new SeeEarningsInvestmentUseCase(repository);

  const output = await useCase.handle();
  return res.json(output);
});

export default investmentRoutes;
