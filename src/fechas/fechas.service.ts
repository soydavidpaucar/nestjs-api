import { Injectable } from '@nestjs/common';

@Injectable()
export class FechasService {
  private fechas = [
    { fecha: new Date('2018-02-3'), saldoAntiguo: 1225 },
    { fecha: new Date('2020-04-6'), saldoNuevo: null },
    { fecha: new Date('2013-05-0'), saldoAntiguo: 125.5 },
    { fecha: new Date('2012-01-0'), saldoNuevo: 1205 },
  ];

  public getFechasByOrder(order: string): Array<any> {
    if (order === 'asc') {
      return this.fechas.sort((a, b) => a.fecha.getTime() - b.fecha.getTime());
    } else if (order === 'desc') {
      return this.fechas.sort((a, b) => b.fecha.getTime() - a.fecha.getTime());
    }
  }
}
