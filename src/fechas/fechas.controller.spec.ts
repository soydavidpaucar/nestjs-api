import { Test } from '@nestjs/testing';
import { FechasController } from './fechas.controller';
import { FechasService } from './fechas.service';

describe('SaldosController', () => {
  let fechasController: FechasController;
  let fechasService: FechasService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [FechasController],
      providers: [FechasService],
    }).compile();

    fechasService = moduleRef.get<FechasService>(FechasService);
    fechasController = moduleRef.get<FechasController>(FechasController);
  });

  describe('obtener fechas por orden', () => {
    it('debe retornar un array de elementos de forma ascendente', async () => {
      const result = [
        {
          fecha: '2018-02-03T05:00:00.000Z',
          saldoAntiguo: 1225,
        },
        {
          fecha: '2020-04-06T05:00:00.000Z',
          saldoNuevo: null,
        },
        {
          fecha: null,
          saldoAntiguo: 125.5,
        },
        {
          fecha: null,
          saldoNuevo: 1205,
        },
      ];
      jest
        .spyOn(fechasService, 'getFechasByOrder')
        .mockImplementation(() => result);

      expect(await fechasController.getFechasByOrder('asc')).toBe(result);
    });

    it('debe retornar un array de elementos de forma descendente', async () => {
      const result = [
        {
          fecha: '2020-04-06T05:00:00.000Z',
          saldoNuevo: null,
        },
        {
          fecha: '2018-02-03T05:00:00.000Z',
          saldoAntiguo: 1225,
        },
        {
          fecha: null,
          saldoNuevo: 125.5,
        },
        {
          fecha: null,
          saldoAntiguo: 1205,
        },
      ];
      jest
        .spyOn(fechasService, 'getFechasByOrder')
        .mockImplementation(() => result);

      expect(await fechasController.getFechasByOrder('desc')).toBe(result);
    });
  });
});
