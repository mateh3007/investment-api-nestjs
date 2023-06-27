import { Body, Controller, Post } from '@nestjs/common';
import {
  CreateInvestmentDtoInput,
  CreateInvestmentDtoOutput,
} from 'src/core/investments/dto/create-investment.dto';
import { CreateInvestmentUseCase } from 'src/core/investments/use-case/create-investment/create-investment.use-case';

@Controller('create-investment')
export class CreateInvestmentController {
  constructor(private readonly useCase: CreateInvestmentUseCase) {}
  @Post()
  async handle(
    @Body() data: CreateInvestmentDtoInput,
  ): Promise<CreateInvestmentDtoOutput> {
    return this.useCase.handle(data);
  }
}
