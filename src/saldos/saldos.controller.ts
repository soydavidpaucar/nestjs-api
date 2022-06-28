import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { SaldosService } from './saldos.service';

@Controller({
  path: 'saldos',
  version: ['1'],
})
export class SaldosController {
  constructor(private saldosService: SaldosService) {}

  @Get()
  async getFechasByTodosLosSados(
    @Query('sumarTodosLosSaldos') sumarAllSaldos: string,
  ): Promise<number> {
    if (sumarAllSaldos === undefined) {
      throw new BadRequestException('Parametro requerido');
    }
    if (sumarAllSaldos != 'true' && sumarAllSaldos != 'false') {
      throw new BadRequestException('Parametro invalido');
    }
    return this.saldosService.getFechasBySumaTodosLosSaldos(sumarAllSaldos);
  }
}
