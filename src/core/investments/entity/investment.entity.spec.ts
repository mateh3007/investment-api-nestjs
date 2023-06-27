import { InvestmentEntity, investmentProps } from './investment.entity';

describe('Investment entity', () => {
  const investmentProps: investmentProps = {
    FII: 'AAAA',
    initialValue: 10,
    numberOfShares: 2,
  };

  it('Should able create an investment', () => {
    const investment = new InvestmentEntity(investmentProps);
    console.log(investment);
    expect(investment).toEqual({
      ...investmentProps,
      totalExpenses: 20,
      totalEarnings: 0,
    });
  });

  it('Should change final value of entity', () => {
    const investment = new InvestmentEntity(investmentProps);
    investment.updateNumberOfShares(3);

    expect(investment).toEqual({
      FII: 'AAAA',
      initialValue: 10,
      numberOfShares: 3,
      totalExpenses: 30,
      totalEarnings: 0,
    });
  });

  it('Should change final value of entity', () => {
    const investment = new InvestmentEntity(investmentProps);
    investment.updateInitialValue(30);

    expect(investment).toEqual({
      FII: 'AAAA',
      initialValue: 30,
      numberOfShares: 2,
      totalExpenses: 60,
      totalEarnings: 0,
    });
  });
});
