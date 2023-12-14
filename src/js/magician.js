import Attackpower from './app';

export default class Magician extends Attackpower {
  constructor(attack, distance, stoned = false) {
    super(attack, distance);
    this.stoned = stoned;
  }

  getAttack() {
    const attackWithDistanceModifier = this.getAttackWithDistanceModifier();

    if (this.stoned) {
      const stonedAttack = attackWithDistanceModifier - Math.log2(this.distance) * 5;

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