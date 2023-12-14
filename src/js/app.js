
// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
//=====================================================

"use strict"
import Magician from './magician';
import Daemon from './daemon';

export default class Attackpower {//создаём класс от которого будут наследоваться другие классы
  constructor(attack, distance) {//конструктор
    this.attack = attack;
    this.distance = distance;
  }

  getAttackWithDistanceModifier() {//модификатор для коррекции линейного значения
    const distanceModifier = 1 - 0.1 * (this.distance - 1);
    return this.attack * distanceModifier;
  }

  setDistance(distance) {
    this.distance = distance;
  }
}




// Пример использования
const magician = new Magician(100, 2);
console.log(magician.getAttack()); // Выведет 90

const daemon = new Daemon(100, 2);
console.log(daemon.getAttack()); // Выведет 72

magician.isStoned = true;
daemon.isStoned = true;

console.log(magician.getAttack()); // Выведет 85
console.log(daemon.getAttack()); // Выведет 54