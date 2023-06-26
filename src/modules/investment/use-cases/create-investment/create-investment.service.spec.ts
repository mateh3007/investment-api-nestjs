import { Test, TestingModule } from '@nestjs/testing';
import { CreateInvestmentService } from './create-investment.service';

describe('CreateInvestmentService', () => {
  let service: CreateInvestmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreateInvestmentService],
    }).compile();

    service = module.get<CreateInvestmentService>(CreateInvestmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
