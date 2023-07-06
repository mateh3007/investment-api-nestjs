import { Injectable } from '@nestjs/common';
import { ShareEntity } from '../../entity/share.entity';
import { IShareRepository } from '../../entity/share.irepository';
import { gateway } from './gateway/gateway.interface';
import { createShareDtoOutputUseCase } from '../../dto/create-share.dto';

@Injectable()
export class CreateShareUseCase {
  constructor(private readonly repository: IShareRepository) {}
  async handle(
    data: ShareEntity,
    request: gateway,
  ): Promise<createShareDtoOutputUseCase> {
    if (request === undefined) {
      throw new Error('FII not found or not exists');
    }

    const output = await this.repository.create(data);
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
