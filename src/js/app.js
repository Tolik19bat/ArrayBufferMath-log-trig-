
// TODO: write your code here
// import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));
//=====================================================

import {Magician} from './classMagician';
import {Daemon} from './classDaemon';

export class Attackpower {
  constructor(attack, distance) {
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

magician.stoned = true;
daemon.stoned = true;

console.log(magician.getAttack()); // Выведет 85
console.log(daemon.getAttack()); // Выведет 54