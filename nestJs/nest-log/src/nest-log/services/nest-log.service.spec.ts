import { Test, TestingModule } from '@nestjs/testing';
import { NestLogService } from './nest-log.service';

describe('NestLogService', () => {
  let service: NestLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NestLogService],
    }).compile();

    service = module.get<NestLogService>(NestLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
