import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
//========================================================

import { Magician, Daemon } from '../app'; //путь к нашим классам


    test('getAttack должен правильно рассчитывать атаку, не будучи забит камнями', () => {
      let magician = new Magician(100, 2);
      expect(magician.getAttack()).toBe(90);
    });

    test('getAttack должен правильно рассчитывать атаку с камнями', () => {
      const magician = new Magician(100, 2);
      magician.isStoned = true;
      expect(magician.getAttack()).toBe(85);
    });

    test('setDistance следует обновить расстояние', () => {
      const magician = new Magician(100, 2);
      magician.setDistance(3);
      expect(magician.distance).toBe(3);
    });


    test('getAttack должен правильно рассчитывать атаку не будучи забит камнями', () => {
      const daemon = new Daemon(100, 2);
      expect(daemon.getAttack()).toBe(90);
    });

    test('getAttack должен правильно рассчитывать атаку с камням', () => {
      const daemon = new Daemon(100, 2);
      daemon.isStoned = true;
      expect(daemon.getAttack()).toBe(85);
    });

    test('setDistance следует обновить состояние', () => {
      const daemon = new Daemon(100, 2);
      daemon.setDistance(3);
      expect(daemon.distance).toBe(3);
    });