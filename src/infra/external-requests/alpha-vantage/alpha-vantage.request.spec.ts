import { alphaVantage } from './alpha-vantage.request';

describe('Alpha vantage request', () => {
  it('Should able return something', async () => {
    const req = await alphaVantage('VALE3');
    console.log(req);
    expect(req).toBeTruthy();
  });

  it('Should able return the selected value', async () => {
    const req = await alphaVantage('AIEC11', 3);
    expect(req).toBeTruthy();
  });
});
