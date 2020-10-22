import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleEntity } from './entities/role.entity';
import { RoleController } from './controller/role/role.controller';
import { RoleService } from './services/role/role.service';
// import { AuthGuard } from '../../guard/auth.guard';
// import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      RoleEntity,
    ]),
  ],
  controllers: [
    RoleController,
  ],
  providers: [
    RoleService,
    // {
    //   provide: APP_GUARD,
    //   useClass: AuthGuard,
    // },
  ],
})
export class RoleModule {
}
