import { Test, TestingModule } from '@nestjs/testing';
import { CreateInvestmentController } from './create-investment.controller';

describe('CreateInvestmentController', () => {
  let controller: CreateInvestmentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateInvestmentController],
    }).compile();

    controller = module.get<CreateInvestmentController>(
      CreateInvestmentController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
