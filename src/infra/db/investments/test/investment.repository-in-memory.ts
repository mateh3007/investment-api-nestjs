import { CreateInvestmentDtoOutput } from "../../../../core/investments/dto/create-investment.dto";
import { getAllInvestmentsDtoOutput } from "../../../../core/investments/dto/get-all-investments.dto";
import {
  getOneInvestmentDtoInput,
  getOneInvestmentDtoOutput,
} from "../../../../core/investments/dto/get-one-investment.dto";
import {
  updateInvestmentDtoInput,
  updateInvestmentDtoOutput,
} from "../../../../core/investments/dto/update-investment.dto";
import { InvestmentEntity } from "../../../../core/investments/entity/investment.entity";
import { IInvestmentRepository } from "../../../../core/investments/entity/investment.irepository";
import { prisma } from "../../ORM/prisma/prisma";

export class InvestmentRepositoryInMemory implements IInvestmentRepository {
  async create(data: InvestmentEntity): Promise<void> {
    const output = await prisma.investment.create({
      data: {
        ...data,
        totalEarnings: undefined,
        deletedAt: null,
      },
    });
  }
  async getOne(
    data: getOneInvestmentDtoInput
  ): Promise<getOneInvestmentDtoOutput | null> {
    const investment = await prisma.investment.findUnique({
      where: {
        FII: data.FII,
      },
    });

    if (!investment) {
      throw new Error("Investment not created");
    }

    return {
      ...investment,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };
  }

  async update(
    data: updateInvestmentDtoInput
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
