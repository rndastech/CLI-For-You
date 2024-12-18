class Enemy {
  constructor(name, hp, attackDamage) {
    this.name = name;
    this.hp = hp;
    this.attackDamage = attackDamage;
  }

  takeDamage(damage) {
    this.hp -= damage;
    if (this.hp <= 0) {
      this.hp = 0;
      console.log(`${this.name} has been defeated!`);
    } else {
      console.log(`${this.name} has ${this.hp} HP left.`);
    }
  }

  attack(player) {
    console.log(
      `${this.name} attacks ${player.name} and deals ${this.attackDamage} damage.`
    );
    player.takeDamage(this.attackDamage);
  }
}

const goblin = new Enemy("Goblin", 50, 10);

module.exports = { Enemy };
