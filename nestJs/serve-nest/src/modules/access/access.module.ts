import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessEntity } from './entities/access.entity';
import { AccessController } from './controller/access.controller';
import { AccessService } from './services/access.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      AccessEntity
    ])
  ],
  controllers: [AccessController],
  providers: [AccessService]
})
export class AccessModule {}
