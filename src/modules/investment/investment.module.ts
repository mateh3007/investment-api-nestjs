import { Module } from '@nestjs/common';
import { CreateInvestmentController } from './use-cases/create-investment/create-investment.controller';
import { CreateInvestmentService } from './use-cases/create-investment/create-investment.service';
import { SeeEarningsController } from './use-cases/see-earnings/see-earnings.controller';
import { SeeEarningsService } from './use-cases/see-earnings/see-earnings.service';
import { InvestmentRepositoryInMemory } from 'src/infra/db/investments/test/investment.repository-in-memory';
import { CreateInvestmentUseCase } from 'src/core/investments/use-case/create-investment/create-investment.use-case';
import { IInvestmentRepository } from 'src/core/investments/entity/investment.irepository';
import { SeeEarningsInvestmentUseCase } from 'src/core/investments/use-case/see-earnings/see-earnings-investment.use-case';

@Module({
  controllers: [CreateInvestmentController, SeeEarningsController],
  providers: [
    CreateInvestmentService,
    SeeEarningsService,
    {
      provide: InvestmentRepositoryInMemory,
      useClass: InvestmentRepositoryInMemory,
    },
    {
      provide: CreateInvestmentUseCase,
      useFactory: (repository: IInvestmentRepository) => {
        new CreateInvestmentUseCase(repository);
      },
      inject: [InvestmentRepositoryInMemory],
    },
    {
      provide: SeeEarningsInvestmentUseCase,
      useFactory: (repository: IInvestmentRepository) => {
        new SeeEarningsInvestmentUseCase(repository);
      },
      inject: [InvestmentRepositoryInMemory],
    },
  ],
})
export class InvestmentModule {}
