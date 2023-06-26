import { IInvestmentRepository } from "../../entity/investment.irepository";
import { alphaVantage } from "../../../../infra/external-requests/alpha-vantage/alpha-vantage.request";
export class SeeEarningsInvestmentUseCase {
  constructor(private readonly repository: IInvestmentRepository) {}
  async handle() {
    const investments = await this.repository.getAll();
    const investmentFIIList = await Promise.all(
      investments.map(async (item) => {
        const res = await alphaVantage(item.FII, 3);
        return {
          ...item,
          closeValue: res,
        };
      })
    );

    const updatedInvestmentList = Promise.all(
      investmentFIIList.map((item) => {
        const closeValueExpression = item.closeValue * item.numberOfShares;
        item.totalEarnings = item.totalExpenses - closeValueExpression;

        return {
          ...item,
          totalEarnings: item.totalEarnings,
        };
      })
    );

    return updatedInvestmentList;
  }
}
