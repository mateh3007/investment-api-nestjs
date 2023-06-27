import { getAllInvestmentsDtoOutput } from '../../../../core/investments/dto/get-all-investments.dto';
import { getOneInvestmentDtoOutput } from '../../../../core/investments/dto/get-one-investment.dto';
import {
  updateInvestmentDtoInput,
  updateInvestmentDtoOutput,
} from '../../../../core/investments/dto/update-investment.dto';
import { InvestmentEntity } from '../../../../core/investments/entity/investment.entity';
import { IInvestmentRepository } from '../../../../core/investments/entity/investment.irepository';
import { prisma } from '../../ORM/prisma/prisma';

export class InvestmentRepositoryInMemory implements IInvestmentRepository {
  async create(data: InvestmentEntity): Promise<void> {
    await prisma.investment.create({
      data: {
        ...data,
        totalEarnings: undefined,
        deletedAt: null,
      },
    });
  }
  async getOne(data: string): Promise<getOneInvestmentDtoOutput | null> {
    const investment = await prisma.investment.findUnique({
      where: {
        FII: data,
      },
    });

    return investment;
  }

  async update(
    data: updateInvestmentDtoInput,
  ): Promise<updateInvestmentDtoOutput> {
    const investment = await prisma.investment.update({
      where: {
        FII: data.FII,
      },
      data,
    });
    return investment;
  }

  async getAll(): Promise<getAllInvestmentsDtoOutput[]> {
    const investments = await prisma.investment.findMany();
    return investments.map((item) => {
      return item;
    });
  }
}
