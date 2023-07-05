import { Injectable } from '@nestjs/common';
import { ShareEntity } from '../../entity/share.entity';
import { IShareRepository } from '../../entity/share.irepository';
import { IGateway } from './gateway/gateway.interface';
import { createShareDtoOutputUseCase } from '../../dto/create-share.dto';

@Injectable()
export class CreateShareUseCase {
  constructor(
    private readonly repository: IShareRepository,
    private readonly request: IGateway,
  ) {}
  async handle(data: ShareEntity): Promise<createShareDtoOutputUseCase> {
    const externalRequest = await this.request.braipRequest(data.symbol);
    if (externalRequest === undefined) {
      throw new Error('FII not found or not exists');
    }

    const output = await this.repository.create(data);
    const requestResult = externalRequest[0];

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
