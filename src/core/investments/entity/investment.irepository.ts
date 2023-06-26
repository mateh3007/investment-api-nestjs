import { CreateInvestmentDtoOutput } from "../dto/create-investment.dto";
import { getAllInvestmentsDtoOutput } from "../dto/get-all-investments.dto";
import {
  getOneInvestmentDtoInput,
  getOneInvestmentDtoOutput,
} from "../dto/get-one-investment.dto";
import {
  updateInvestmentDtoInput,
  updateInvestmentDtoOutput,
} from "../dto/update-investment.dto";
import { InvestmentEntity, investmentProps } from "./investment.entity";

export interface IInvestmentRepository {
  create(data: InvestmentEntity): Promise<void>;
  getOne(
    data: getOneInvestmentDtoInput
  ): Promise<getOneInvestmentDtoOutput | null>;
  update(data: updateInvestmentDtoInput): Promise<updateInvestmentDtoOutput>;
  getAll(): Promise<getAllInvestmentsDtoOutput[]>;
}
