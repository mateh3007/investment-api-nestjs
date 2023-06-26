import { InvestmentRepositoryInMemory } from "../../../../infra/db/investments/test/investment.repository-in-memory";
import { SeeEarningsInvestmentUseCase } from "./see-earnings-investment.use-case";
describe("See earnings investment", () => {
  it("Should able return all investments", async () => {
    const useCase = new SeeEarningsInvestmentUseCase(
      new InvestmentRepositoryInMemory()
    );
    const output = await useCase.handle();
    expect(output).toBeTruthy();
  });
});
