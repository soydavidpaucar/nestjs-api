import { Injectable } from '@nestjs/common';

@Injectable()
export class SaldosService {
  private fechas = [
    { fecha: new Date('2018-02-3'), saldoAntiguo: 1225 },
    { fecha: new Date('2020-04-6'), saldoNuevo: null },
    { fecha: new Date('2013-05-0'), saldoAntiguo: 125.5 },
    { fecha: new Date('2012-01-0'), saldoNuevo: 1205 },
  ];

  getFechasBySumaTodosLosSaldos(sumarTodosLosSaldos: string): number {
    if (sumarTodosLosSaldos == 'true') {
      let saldoTotal = 0;
      this.fechas.forEach((fecha) => {
        if (fecha.saldoAntiguo) {
          saldoTotal += fecha.saldoAntiguo;
        }
        if (fecha.saldoNuevo) {
          saldoTotal += fecha.saldoNuevo;
        }
      });
      return saldoTotal;
    }
  }
}
