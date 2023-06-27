import { getAllInvestmentsDtoOutput } from '../dto/get-all-investments.dto';
import { getOneInvestmentDtoOutput } from '../dto/get-one-investment.dto';
import {
  updateInvestmentDtoInput,
  updateInvestmentDtoOutput,
} from '../dto/update-investment.dto';
import { InvestmentEntity } from './investment.entity';

export abstract class IInvestmentRepository {
  abstract create(data: InvestmentEntity): Promise<void>;
  abstract getOne(data: string): Promise<getOneInvestmentDtoOutput | null>;
  abstract update(
    data: updateInvestmentDtoInput,
  ): Promise<updateInvestmentDtoOutput>;
  abstract getAll(): Promise<getAllInvestmentsDtoOutput[]>;
}
