import { Test, TestingModule } from '@nestjs/testing';
import { SeeEarningsService } from './see-earnings.service';

describe('SeeEarningsService', () => {
  let service: SeeEarningsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SeeEarningsService],
    }).compile();

    service = module.get<SeeEarningsService>(SeeEarningsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
