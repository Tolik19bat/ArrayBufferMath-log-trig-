import {Attackpower} from './app';

export class Magician extends Attackpower {
  constructor(attack, distance, stoned = false) {
    super(attack, distance);
    this.stoned = stoned;
    this.attack = attack;
    this.distance = distance;
  }

  get attack() {
    const attackWithDistanceModifier = this.getAttackWithDistanceModifier();

    if (this.stoned) {
      const stonedAttack = attackWithDistanceModifier - Math.log2(this.distance) * 5;

      return stonedAttack >= 0 ? stonedAttack : 0;
    }
    return attackWithDistanceModifier;
  }

  get stoned() {
    return this.stoned;
  }

  set stoned(value) {
    this.stoned = value;
  }
}
// Пример использования
const magician = new Magician(100, 2);
console.log(magician.getAttack()); // Выведет 90

// const daemon = new Daemon(100, 2);
// console.log(daemon.getAttack()); // Выведет 72

magician.stoned = true;
// daemon.isStoned = true;

console.log(magician.getAttack()); // Выведет 85
// console.log(daemon.getAttack()); // Выведет 54