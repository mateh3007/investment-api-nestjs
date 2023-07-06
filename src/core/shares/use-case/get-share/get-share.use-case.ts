import { Injectable } from '@nestjs/common';
import {
  getShareDtoInput,
  getShareDtoOutputUseCase,
} from '../../dto/get-share.dto';
import { gateway } from '../../gateway/gateway.interface';
import { IShareRepository } from '../../entity/share.irepository';

@Injectable()
export class GetShareUseCase {
  constructor(private readonly repository: IShareRepository) {}

  async handle(
    data: getShareDtoInput,
    request: gateway,
  ): Promise<getShareDtoOutputUseCase> {
    const output = await this.repository.getOne(data);
    const requestResult = request[0];

    const totalCapitalGain =
      requestResult.close * output.totalQuotas - output.totalOpeningPosition;

    const capitalGain = requestResult.close - output.openingPrice;
    const totalCurrentPosition = requestResult.close * output.totalQuotas;
    const currentPrice = requestResult.close;

    return {
      ...output,
      capitalGain,
      currentPrice,
      totalCapitalGain,
      totalCurrentPosition,
    };
  }
}
