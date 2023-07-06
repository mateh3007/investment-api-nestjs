import { BraipRequest } from './braip.request';

describe('Alpha vantage request', () => {
  it('Should able return something', async () => {
    const req = new BraipRequest();
    const output = await req.braipRequest('BBAS3');
    console.log(output);
    expect(output).toBeTruthy();
  });
});
