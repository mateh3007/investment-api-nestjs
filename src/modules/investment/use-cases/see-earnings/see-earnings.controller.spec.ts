import { Test, TestingModule } from '@nestjs/testing';
import { SeeEarningsController } from './see-earnings.controller';

describe('SeeEarningsController', () => {
  let controller: SeeEarningsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SeeEarningsController],
    }).compile();

    controller = module.get<SeeEarningsController>(SeeEarningsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
