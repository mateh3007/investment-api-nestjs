import { Test, TestingModule } from '@nestjs/testing';
import { CreateShareController } from './create-share.controller';

describe('CreateShareController', () => {
  let controller: CreateShareController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreateShareController],
    }).compile();

    controller = module.get<CreateShareController>(CreateShareController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
