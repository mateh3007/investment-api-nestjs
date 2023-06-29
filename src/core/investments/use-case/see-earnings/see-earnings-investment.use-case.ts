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
      const totalOpeningPosition = category.shares.reduce(
        (acc, curr) => acc + curr.openingPrice,
        0,
      );
      const totalQuotas = category.shares.reduce(
        (acc, curr) => acc + curr.totalQuotas,
        0,
      );

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
          return findShare.close * totalQuotas;
        })
        .reduce((acc, curr) => {
          return acc + curr;
        }, 0);

      const totalCapitalGain =
        totalCurrentPosition - totalOpeningPosition * totalQuotas;

      console.log(totalCapitalGain);

      return {
        ...category,
        sharesQuantity,
        totalOpeningPosition: totalOpeningPosition * totalQuotas,
        totalCurrentPosition,
        totalCapitalGain,
        shares,
      };
    });

    // const investmentFIIList = await Promise.all(
    //   investments.map(async (item) => {
    //     return {
    //       category: item.category,
    //       label: item.label,
    //       shares: await Promise.all(
    //         item.shares.map(async (share) => {
    //           urlShares += `${share.symbol},`;
    //           const res = await alphaVantage(urlShares);
    //           return res;
    //         }),
    //       ),
    //     };
    //   }),
    // );

    // const finalData = investmentFIIList.map((item) => {
    //   const sharesQuantity = item.shares.length;
    //   const totalOpeningPosition = investments.map((item) => {
    //     const shares = item.shares.map((item) => {
    //       return item.openingPrice * item.totalQuotas;
    //     });

    //     return shares;
    //   });
    //   return {
    //     category: item.category,
    //     label: item.label,
    //     sharesQuantity,
    //     totalOpeningPosition,
    //   };
    // });

    // console.log(finalData);
    // return finalData;

    // return investmentFIIList.map((item) => {
    //   console.log();
    //   const sharesQuantity = item.shares.length;
    //   const totalOpeningPosition = item.shares.reduce(
    //     (acc, curr) => acc + curr.openingPosition,
    //     0,
    //   );
    //   const totalCurrentPosition = item.shares.reduce(
    //     (acc, curr) => acc + curr.currentPosition,
    //     0,
    //   );
    //   const totalCapitalGain = item.shares.reduce(
    //     (acc, curr) => acc + curr.capitalGain,
    //     0,
    //   );

    //   return {
    //     category: item.category,
    //     label: item.label,
    //     sharesQuantity,
    //     totalOpeningPosition,
    //     totalCurrentPosition,
    //     totalCapitalGain,
    //     shares: item.shares,
    //   };
    // });

    // return investmentFIIList;
  }
}
