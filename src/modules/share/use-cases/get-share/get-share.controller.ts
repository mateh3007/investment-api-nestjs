import { Body, Controller, Get } from '@nestjs/common';
import {
  getShareDtoInput,
  getShareDtoOutputUseCase,
} from 'src/core/shares/dto/get-share.dto';
import { GetShareUseCase } from 'src/core/shares/use-case/get-share/get-share.use-case';
import { BraipRequest } from 'src/infra/external-requests/braip/braip.request';

@Controller('get-share')
export class GetShareController {
  constructor(private readonly useCase: GetShareUseCase) {}

  @Get()
  async handle(
    @Body() data: getShareDtoInput,
  ): Promise<getShareDtoOutputUseCase> {
    const requestFunction = new BraipRequest();
    const request = await requestFunction.braipRequest(data.symbol);
    return await this.useCase.handle(data, request);
  }
}
