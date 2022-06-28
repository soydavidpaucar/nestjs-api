import { Module } from '@nestjs/common';
import { SaldosController } from './saldos.controller';
import { SaldosService } from './saldos.service';

@Module({})
export class SaldosModule {
  providers: [SaldosService];
  controllers: [SaldosController];
}
