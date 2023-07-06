import { Module } from '@nestjs/common';
import { CreateShareController } from './use-cases/create-share/create-share.controller';
import { CreateShareUseCase } from 'src/core/shares/use-case/create-share/create-share.use-case';
import { IShareRepository } from 'src/core/shares/entity/share.irepository';
import { ShareRepositoryInMemory } from 'src/infra/db/shares/test/share.repository-in-memory';
import { BraipRequest } from 'src/infra/external-requests/braip/braip.request';
// import { IGateway } from 'src/core/shares/use-case/create-share/gateway/gateway.interface';
import { GetShareController } from './use-cases/get-share/get-share.controller';
import { GetShareUseCase } from 'src/core/shares/use-case/get-share/get-share.use-case';

@Module({
  controllers: [CreateShareController, GetShareController],
  providers: [
    CreateShareUseCase,
    GetShareUseCase,
    BraipRequest,
    {
      provide: IShareRepository,
      useClass: ShareRepositoryInMemory,
    },
  ],
})
export class ShareModule {}
