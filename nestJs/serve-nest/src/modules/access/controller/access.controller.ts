import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { AccessService } from '../services/access.service';
import { AccessEntity } from '../entities/access.entity';
import { query } from 'express';

@Controller('access')
export class AccessController {
  constructor(
    private readonly accessService: AccessService,
  ) {
  }

  @Post()
  async createAccess(
    @Body() body: { [keyName: string]: any },
  ): Promise<AccessEntity> {
    return await this.accessService.createAccess(body);
  }

  @Delete(':id')
  async deleteAccess(
    @Param('id') id: number,
  ): Promise<any> {
    return await this.accessService.deleteAccess(id);
  }

  @Patch(':id')
  async modifyAccess(
    @Param('id') id: number,
    @Body() body: { [keyName: string]: any },
  ): Promise<AccessEntity> {
    return await this.accessService.modifyAccess(id, body);
  }

  @Get()
  async accessList(
    @Query() query: { [keyName: string]: any },
  ): Promise<AccessEntity[]> {
    return this.accessService.accessList(query);
  }

  @Get(':id')
  async accessById(
    @Param('id') id: number,
  ): Promise<AccessEntity> {
    return await this.accessService.accessById(id);
  }
}
