import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { FechasService } from './fechas.service';

@Controller({
  path: 'fechas',
  version: ['1'],
})
export class FechasController {
  constructor(private fechasService: FechasService) {}

  @Get()
  async getFechasByOrder(@Query('order') order: string): Promise<any> {
    if (order === undefined) {
      throw new BadRequestException('Parámetro requerido');
    }
    if (order != 'asc' && order != 'desc') {
      throw new BadRequestException('Parámetro invalido');
    }
    return this.fechasService.getFechasByOrder(order);
  }
}
