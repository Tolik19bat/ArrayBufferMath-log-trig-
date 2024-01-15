
// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
//=====================================================


export default class Attackpower {
  constructor(attack, distance, stoned = false) {
    this.attack = attack;
    this.distance = distance;
    this.stoned = stoned;
  }

  get _attack() {
    return this.attack;
  }

  set _attack(value) {
    this.attack = value;
  }

  get _stoned() {
    return this.stoned;
  }

  set _stoned(value) {
    this.stoned = value;
  }

  getAttackWithDistanceModifier() {//модификатор для коррекции линейного значения
    const distanceModifier = 1 - 0.1 * (this.distance - 1);
    return this.attack * distanceModifier;
  }

  getAttack() {
    const attackWithDistanceModifier = this.getAttackWithDistanceModifier();
    if (this.stoned) {
      const stonedAttack = attackWithDistanceModifier - Math.log2(this.distance) * 5;
      return stonedAttack >= 0 ? stonedAttack : 0;
    }
    return attackWithDistanceModifier;
  }
}

// Пример использования
// console.log('тесты')
// const magician = new Magician(100, 2);
// console.log(magician.runAttack()); // Выведет 90

// const daemon = new Daemon(100, 2);
// console.log(daemon.runAttack()); // Выведет 72

// magician.stoned = true;
// daemon.stoned = true;

// console.log(magician.runAttack()); // Выведет 85
// console.log(daemon.runAttack()); // Выведет 54