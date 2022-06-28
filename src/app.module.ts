import { Module } from '@nestjs/common';
import { FechasController } from './fechas/fechas.controller';
import { FechasModule } from './fechas/fechas.module';
import { FechasService } from './fechas/fechas.service';
import { SaldosService } from './saldos/saldos.service';
import { SaldosController } from './saldos/saldos.controller';
import { SaldosModule } from './saldos/saldos.module';

@Module({
  imports: [FechasModule, SaldosModule],
  controllers: [FechasController, SaldosController],
  providers: [FechasService, SaldosService],
})
export class AppModule {}
