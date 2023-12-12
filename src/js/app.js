
// TODO: write your code here
// import sum from './basic';
//
// console.log('worked');
//
// console.log(sum([1, 2]));
//=====================================================

// "use strict"
// Object.prototype.mathLog2 = function () {
//   Math.log2 || function (x) {
//     return Math.log(x) / Math.LN2;
//   }
// }


// export default
class Math {//создаём класс от которого будут наследоваться другие классы
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

Object.prototype.log2 = function() {
  // if (!Math.log2) {
  //   // Если нет, создаем свою реализацию
  //   Math.log2 = function (x) {
  //     return Math.log(x) / Math.log(2);
  //   }
  // }
      // Проверяем, поддерживается ли Math.log в текущем окружении
      if (!Math.log2) {
        // Если нет, создаем свою реализацию

        Math.log = function (x) {
          // Ваша реализация логарифма
          // Например, можно использовать формулу логарифма по основанию 10 и Math.log10
          return Math.log(x) / Math.log(2);
        }
      }
    }

class Magician extends Math {
  constructor(attack, distance, stoned = false) {
    super(attack, distance);
    this.stoned = stoned;
  }



  getAttack() {
    const attackWithDistanceModifier = this.getAttackWithDistanceModifier();

    if (this.stoned) {
      const math = log2(this.distance);

      const stonedAttack = attackWithDistanceModifier - (math * 5);

      return stonedAttack >= 0 ? stonedAttack : 0;
    }
    return attackWithDistanceModifier;
  }


  get isStoned() {
    return this.stoned;
  }

  set isStoned(value) {
    this.stoned = value;
  }
}

class Daemon extends Math {
  constructor(attack, distance, stoned = false) {
    super(attack, distance);
    this.stoned = stoned;
  }

  getAttack() {
    const attackWithDistanceModifier = this.getAttackWithDistanceModifier();
    if (this.stoned) {

      const math = Math.log2(this.distance);
      const stonedAttack = attackWithDistanceModifier - (math * 5);
      return stonedAttack >= 0 ? stonedAttack : 0;
    }
    return attackWithDistanceModifier;
  }

  get isStoned() {
    return this.stoned;
  }

  set isStoned(value) {
    this.stoned = value;
  }
}

// Пример использования
const magician = new Magician(100, 2);
console.log(magician.getAttack()); // Выведет 90

const daemon = new Daemon(120, 5);
console.log(daemon.getAttack()); // Выведет 72

magician.isStoned = true;
daemon.isStoned = true;

console.log(magician.getAttack()); // Выведет 85
console.log(daemon.getAttack()); // Выведет 54