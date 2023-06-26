import { Controller, Get } from '@nestjs/common';
import { SeeEarningsService } from './see-earnings.service';

@Controller('see-earnings')
export class SeeEarningsController {
  constructor(private readonly service: SeeEarningsService) {}

  @Get()
  async handle() {
    return await this.service.handle();
  }
}
