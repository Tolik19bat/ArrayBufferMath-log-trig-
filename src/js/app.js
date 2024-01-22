
// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));
//=====================================================


export default class Attackpower {
  constructor(attackBase, distance, stoned = false) {
    this.attackBase = attackBase;
    this.distance = distance;
    this.stoned = stoned;
  }

  getAttackWithDistanceModifier() {
    const distanceModifier = 1 - 0.1 * (this.distance - 1);
    return this.attackBase * distanceModifier;
  }

  get attack() {
    const attackWithDistanceModifier = this.getAttackWithDistanceModifier();
    if (this.stoned) {
      const stonedAttack =
        attackWithDistanceModifier - Math.log2(this.distance) * 5;
      return Math.max(stonedAttack, 0); // Добавлена проверка на минимальное значение 0
    }
    return attackWithDistanceModifier;
  }

  set attack(value) {
    this.attackBase = value;
  }

  get _stoned() {
    return this.stoned;
  }

  set _stoned(value) {
    this.stoned = value;
  }
}
// const magician = new Magician(100, 2);
// console.log(magician.attack); // Выведет 90

// const daemon = new Daemon(100, 2);
// console.log(daemon.attack); // Выведет 90

// magician._stoned = true;
// daemon._stoned = true;

// console.log(magician.attack); // Выведет 85
// console.log(daemon.attack); // Выведет 85