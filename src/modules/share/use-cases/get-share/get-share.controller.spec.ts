import { Test, TestingModule } from '@nestjs/testing';
import { GetShareController } from './get-share.controller';

describe('GetShareController', () => {
  let controller: GetShareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetShareController],
    }).compile();

    controller = module.get<GetShareController>(GetShareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
