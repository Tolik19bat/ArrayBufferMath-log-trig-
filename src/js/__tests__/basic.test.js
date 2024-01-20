import sum from '../basic';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});
//========================================================

import Magician from '../app'; //путь к нашим классам
import Daemon from '../app';

test('getAttack должен правильно рассчитывать атаку, не будучи забит камнями', () => {
  let magician = new Magician(100, 2);
  expect(magician.attack).toBe(90);
});

test('getAttack должен правильно рассчитывать атаку с камнями', () => {
  const magician = new Magician(100, 2);
  magician._stoned = true;
  expect(magician.attack).toBe(85);
});

test('getAttack должен правильно рассчитывать атаку не будучи забит камнями', () => {
  const daemon = new Daemon(100, 2);
  expect(daemon.attack).toBe(90);
});

test('getAttack должен правильно рассчитывать атаку с камням', () => {
  const daemon = new Daemon(100, 2);
  daemon._stoned = true;
  expect(daemon.attack).toBe(85);
});
