import { Module } from '@nestjs/common';
import { FechasController } from './fechas.controller';
import { FechasService } from './fechas.service';

@Module({
  providers: [FechasService],
  controllers: [FechasController],
})
export class FechasModule {}
