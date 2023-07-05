import { Module } from '@nestjs/common';
import { ShareModule } from './modules/share/share.module';

@Module({
  imports: [ShareModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
