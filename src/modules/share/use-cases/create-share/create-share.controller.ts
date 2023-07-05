import { Body, Controller, Post } from '@nestjs/common';
import { ShareEntity } from 'src/core/shares/entity/share.entity';
import { CreateShareUseCase } from 'src/core/shares/use-case/create-share/create-share.use-case';
import { BraipRequest } from 'src/infra/external-requests/alpha-vantage/braip.request';

@Controller('create-share')
export class CreateShareController {
  constructor(private readonly useCase: CreateShareUseCase) {}
  @Post()
  async handle(@Body() data: ShareEntity): Promise<any> {
    // const braipRequest = new BraipRequest();
    return this.useCase.handle(data);
  }
}
