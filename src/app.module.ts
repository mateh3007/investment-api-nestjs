import { Module } from '@nestjs/common';
import { InvestmentModule } from './modules/investment/investment.module';

@Module({
  imports: [InvestmentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
