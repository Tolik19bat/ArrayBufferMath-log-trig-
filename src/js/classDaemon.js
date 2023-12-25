import Attackpower from './app';

export default class Daemon extends Attackpower {
  constructor(attack, distance, stoned = false) {
    super(attack, distance);
    this.stoned = stoned;
    this.attack;
    this.distance;
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
