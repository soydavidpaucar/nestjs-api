import { Test } from '@nestjs/testing';
import { SaldosController } from './saldos.controller';
import { SaldosService } from './saldos.service';

describe('SaldosController', () => {
  let saldosController: SaldosController;
  let saldosService: SaldosService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [SaldosController],
      providers: [SaldosService],
    }).compile();

    saldosService = moduleRef.get<SaldosService>(SaldosService);
    saldosController = moduleRef.get<SaldosController>(SaldosController);
  });

  describe('sumarTodosLosSaldos', () => {
    it('debe retornar un número', async () => {
      const result = 2555.5;
      jest
        .spyOn(saldosService, 'getSumaTodosLosSaldos')
        .mockImplementation(() => result);

      expect(await saldosController.getSumaTodosLosSaldos('true')).toBe(result);
    });
  });
});
