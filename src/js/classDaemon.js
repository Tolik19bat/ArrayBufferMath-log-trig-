
import Attackpower from './app';

export default class Daemon extends Attackpower {
  constructor(attack, distance, stoned = false) {
    super(attack, distance);
    this.stoned = stoned;
    this.attack = attack;
    this.distance = distance;
  }

  get attack() {
    return this.attack;
  }

  set attack(value) {
    this.attack = value;
  }

  get stoned() {
    return this.stoned;
  }

  set stoned(value) {
    this.stoned = value;
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