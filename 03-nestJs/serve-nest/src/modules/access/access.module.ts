import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessEntity } from './entities/access.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      AccessEntity
    ])
  ]
})
export class AccessModule {}
