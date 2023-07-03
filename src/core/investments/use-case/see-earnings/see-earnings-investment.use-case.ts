import { IInvestmentRepository } from '../../entity/investment.irepository';
import { alphaVantage } from '../../../../infra/external-requests/alpha-vantage/alpha-vantage.request';
import { Injectable } from '@nestjs/common';
import { investments } from '../../shares';

@Injectable()
export class SeeEarningsInvestmentUseCase {
  constructor(private readonly repository: IInvestmentRepository) {}
  async handle() {
    let urlShares = '';

    investments.forEach(async (item) => {
      item.shares.forEach(async (share) => {
        urlShares += `${share.symbol},`;
      });
    });

    const res = await alphaVantage(urlShares.replace(/.$/, ''));

    return investments.map((category) => {
      const sharesQuantity = category.shares.length;

      const shares = category.shares.map((item) => {
        const findShare = res.find((share) => {
          return item.symbol === share.symbol;
        });
        return {
          totalQuotas: item.totalQuotas,
          ...findShare,
          currentPosition: findShare.close * item.totalQuotas,
        };
      });

      const totalCurrentPosition = category.shares
        .map((item) => {
          const findShare = res.find((share) => {
            return item.symbol === share.symbol;
          });
          return item.totalQuotas * findShare.close;
        })
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);

      const finalOpeningPosition = category.shares
        .map((item) => {
          const totalOpeningPosition = item.openingPrice * item.totalQuotas;

          return totalOpeningPosition;
        })
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);
      console.log(finalOpeningPosition);

      const totalCapitalGain = totalCurrentPosition - finalOpeningPosition;

      return {
        ...category,
        sharesQuantity,
        totalOpeningPosition: finalOpeningPosition,
        totalCurrentPosition,
        totalCapitalGain,
        shares,
      };
    });
  }
}
