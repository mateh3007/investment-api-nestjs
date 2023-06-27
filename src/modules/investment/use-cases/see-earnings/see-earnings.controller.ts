import { Controller, Get } from '@nestjs/common';
import { SeeEarningsInvestmentUseCase } from 'src/core/investments/use-case/see-earnings/see-earnings-investment.use-case';

@Controller('see-earnings')
export class SeeEarningsController {
  constructor(private readonly useCase: SeeEarningsInvestmentUseCase) {}

  @Get()
  async handle() {
    return await this.useCase.handle();
  }
}
