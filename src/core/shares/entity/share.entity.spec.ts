import { ShareEntity, shareProps } from './share.entity';

describe('Share entity', () => {
  const props: shareProps = {
    symbol: 'test',
    openingPrice: 10,
    totalQuotas: 3,
  };
  it('should able create an entity', () => {
    const output = new ShareEntity(props);
    expect(output).toEqual({
      ...props,
      totalOpeningPosition: 30,
    });
  });

  it('should able update props', () => {
    const output = new ShareEntity(props);
    output.updateSymbol('test2'),
      output.updateOpeningPrice(20),
      output.updateTotalQuotas(5);

    expect(output).toEqual({
      symbol: 'test2',
      openingPrice: 20,
      totalQuotas: 5,
      totalOpeningPosition: 100,
    });
  });
});
