
import Attackpower from './app';

export default class Magician extends Attackpower {
  constructor(attack, distance) {
    super(attack, distance);
    this.attack = attack;
    this.distance = distance;
  }
}

// Пример использования
// const magician = new Magician(100, 2);
// console.log(magician.runAttack()); // Выведет 90

// const daemon = new Daemon(100, 2);
// console.log(daemon.runAttack()); // Выведет 72

// magician.stoned = true;
// daemon.stoned = true;

// console.log(magician.runAttack()); // Выведет 85
// console.log(daemon.runAttack()); // Выведет 54