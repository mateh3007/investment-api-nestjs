import { InternalServerErrorException } from '@nestjs/common';
import axios from 'axios';
import { gateway } from 'src/core/shares/gateway/gateway.interface';

export class BraipRequest implements gateway {
  async braipRequest(payload: string): Promise<any> {
    try {
      const url = `https://brapi.dev/api/quote/${payload}?range=1d&interval=1d&fundamental=true&dividends=false`;
      const req = await axios.get(url);
      if (!req) {
        return new Error('Not found this FII');
      }
      const reqData = req.data['results'];

      // console.log(reqData);

      return reqData.map((item) => {
        return {
          symbol: item.symbol,
          longName: item.longName,
          updatedAt: item.regularMarketTime,
          close: item.historicalDataPrice[0].close,
        };
      });
    } catch (err) {
      throw new InternalServerErrorException(`${err}: ${payload}`);
    }
  }
}
