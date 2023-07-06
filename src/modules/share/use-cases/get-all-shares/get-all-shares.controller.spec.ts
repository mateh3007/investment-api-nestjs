import { Test, TestingModule } from '@nestjs/testing';
import { GetAllSharesController } from './get-all-shares.controller';

describe('GetAllSharesController', () => {
  let controller: GetAllSharesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetAllSharesController],
    }).compile();

    controller = module.get<GetAllSharesController>(GetAllSharesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
