import { Controller, Get } from '@nestjs/common';
import { getShareDtoOutput } from 'src/core/shares/dto/get-share.dto';
import { GetAllSharesUseCase } from 'src/core/shares/use-case/get-all-shares/get-all-shares.use-case';

@Controller('get-all-shares')
export class GetAllSharesController {
  constructor(private readonly useCase: GetAllSharesUseCase) {}

  @Get()
  async handle(): Promise<getShareDtoOutput[]> {
    return await this.useCase.handle();
  }
}
