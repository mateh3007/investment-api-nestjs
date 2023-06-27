import { BadRequestException, Injectable } from '@nestjs/common';
import {
  CreateInvestmentDtoInput,
  CreateInvestmentDtoOutput,
} from '../../dto/create-investment.dto';
import { InvestmentEntity } from '../../entity/investment.entity';
import { IInvestmentRepository } from '../../entity/investment.irepository';
import { alphaVantage } from 'src/infra/external-requests/alpha-vantage/alpha-vantage.request';

@Injectable()
export class CreateInvestmentUseCase {
  constructor(private readonly repository: IInvestmentRepository) {}

  async handle(
    data: CreateInvestmentDtoInput,
  ): Promise<CreateInvestmentDtoOutput> {
    const investmentAlreadyExists = await this.repository.getOne(data.FII);

    if (investmentAlreadyExists) {
      throw new BadRequestException('FII already created');
    }

    const FIINotExists = await alphaVantage(data.FII);
    if (!FIINotExists) {
      throw new BadRequestException('FII not exists');
    }

    const investment = new InvestmentEntity(data);
    await this.repository.create(investment);
    return {
      ...investment,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };
  }
}
