import { Injectable } from '@nestjs/common';
import { CreateInvestmentDtoInput } from 'src/core/investments/dto/create-investment.dto';
import { CreateInvestmentUseCase } from 'src/core/investments/use-case/create-investment/create-investment.use-case';

@Injectable()
export class CreateInvestmentService {
  constructor(private readonly useCase: CreateInvestmentUseCase) {}

  async handle(data: CreateInvestmentDtoInput) {
    return await this.useCase.handle(data);
  }
}
