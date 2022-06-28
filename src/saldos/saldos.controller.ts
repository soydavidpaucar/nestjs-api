import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { SaldosService } from './saldos.service';

@Controller({
  path: 'saldos',
  version: ['1'],
})
export class SaldosController {
  constructor(private saldosService: SaldosService) {}

  @Get()
  async getSumaTodosLosSaldos(
    @Query('sumarTodosLosSaldos') sumarTodosLosSaldos: string,
  ): Promise<number> {
    if (sumarTodosLosSaldos === undefined) {
      throw new BadRequestException('Parametro requerido');
    }
    if (sumarTodosLosSaldos != 'true' && sumarTodosLosSaldos != 'false') {
      throw new BadRequestException('Parametro invalido');
    }
    return this.saldosService.getSumaTodosLosSaldos(sumarTodosLosSaldos);
  }
}
