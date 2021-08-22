import { Module } from '@nestjs/common';
import { NestLogModule } from './nest-log/nest-log.module';

@Module({
  imports: [NestLogModule.register('test------------')],
})
export class AppModule {}
