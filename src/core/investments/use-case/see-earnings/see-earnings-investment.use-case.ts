import { IInvestmentRepository } from '../../entity/investment.irepository';
import { alphaVantage } from '../../../../infra/external-requests/alpha-vantage/alpha-vantage.request';
import { Injectable } from '@nestjs/common';
import { investments } from '../../shares';

@Injectable()
export class SeeEarningsInvestmentUseCase {
  constructor(private readonly repository: IInvestmentRepository) {}
  async handle() {
    const investmentFIIList = await Promise.all(
      investments.map(async (item) => {
        return {
          category: item.category,
          label: item.label,
          shares: await Promise.all(
            item.shares.map(async (share) => {
              const res = await alphaVantage(share.symbol, 3);

              const openingPosition = share.openingPrice * share.totalQuotas;
              const currentPosition = res.currentPrice * share.totalQuotas;
              return {
                symbol: share.symbol,
                updatedAt: res.updatedAt,
                totalQuotas: share.totalQuotas,
                openingPrice: share.openingPrice,
                currentPrice: res.currentPrice,
                profitability: parseFloat(
                  (
                    ((res.currentPrice - share.openingPrice) * 100) /
                    share.openingPrice
                  ).toFixed(2),
                ),
                openingPosition,
                currentPosition,
                capitalGain: parseFloat(
                  (currentPosition - openingPosition).toFixed(2),
                ),
              };
            }),
          ),
        };
      }),
    );

    return investmentFIIList.map((item) => {
      console.log();
      const sharesQuantity = item.shares.length;
      const totalOpeningPosition = item.shares.reduce(
        (acc, curr) => acc + curr.openingPosition,
        0,
      );
      const totalCurrentPosition = item.shares.reduce(
        (acc, curr) => acc + curr.currentPosition,
        0,
      );
      const totalCapitalGain = item.shares.reduce(
        (acc, curr) => acc + curr.capitalGain,
        0,
      );

      return {
        category: item.category,
        label: item.label,
        sharesQuantity,
        totalOpeningPosition,
        totalCurrentPosition,
        totalCapitalGain,
        shares: item.shares,
      };
    });
  }
}
