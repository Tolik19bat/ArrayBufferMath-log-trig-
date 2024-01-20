
import Attackpower from './app';

export default class Daemon extends Attackpower {
  // Конструктор дочернего класса удален, так как он идентичен родительскому
}

// Пример использования
// const magician = new Magician(100, 2);
// console.log(magician.attack); // Выведет 90

// const daemon = new Daemon(100, 2);
// console.log(daemon.attack); // Выведет 90

// magician._stoned = true;
// daemon._stoned = true;

// console.log(magician.attack); // Выведет 85
// console.log(daemon.attack); // Выведет 85