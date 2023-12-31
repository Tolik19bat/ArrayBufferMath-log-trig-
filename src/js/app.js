
// TODO: write your code here
// import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));
//=====================================================


export default class Attackpower {
  constructor(attack, distance) {
    this.attack = attack;
    this.distance = distance;
  }

  getAttackWithDistanceModifier() {//модификатор для коррекции линейного значения
    const distanceModifier = 1 - 0.1 * (this.distance - 1);
    return this.attack * distanceModifier;
  }
}

// Пример использования
// const magician = new Magician(100, 2);
// console.log(magician.runAttack()); // Выведет 90
//
// const daemon = new Daemon(100, 2);
// console.log(daemon.runAttack()); // Выведет 72
//
// magician.stoned = true;
// daemon.stoned = true;
//
// console.log(magician.runAttack()); // Выведет 85
// console.log(daemon.runAttack()); // Выведет 54