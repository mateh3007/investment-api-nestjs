import {
  CreateInvestmentDtoInput,
  CreateInvestmentDtoOutput,
} from "../../dto/create-investment.dto";
import { InvestmentEntity } from "../../entity/investment.entity";
import { IInvestmentRepository } from "../../entity/investment.irepository";

export class CreateInvestmentUseCase {
  constructor(private readonly repository: IInvestmentRepository) {}

  async handle(
    data: CreateInvestmentDtoInput
  ): Promise<CreateInvestmentDtoOutput> {
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
