import { Injectable } from '@nestjs/common';
import { SeeEarningsInvestmentUseCase } from 'src/core/investments/use-case/see-earnings/see-earnings-investment.use-case';

@Injectable()
export class SeeEarningsService {
  constructor(private readonly useCase: SeeEarningsInvestmentUseCase) {}

  async handle() {
    return await this.useCase.handle();
  }
}
