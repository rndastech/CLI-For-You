import chalk from 'chalk';

export class GameEngine {
  constructor() {
    this.player = { name: '', hp: 100, level: 1, inventory: [] };
    this.isOver = false;
  }

  setName(name) {
    if (name.trim()) {
      this.player.name = name.trim();
      return `Welcome to the game, ${chalk.green.bold(this.player.name)}!`;
    } else {
      return "Name cannot be empty. Please provide a valid name.";
    }
  }

  handleCommand(command) {
    switch (command.toLowerCase()) {
      case 'help':
        return chalk.blue("Available commands: help, stats, explore, attack, quit");
      case 'stats':
        return chalk.magenta(
          `Player Stats:\nName: ${chalk.bold(this.player.name || 'Unknown')}\nHP: ${this.player.hp}\nLevel: ${this.player.level}`
        );
      case 'explore':
        return chalk.yellow("You explore the area and find nothing... for now.");
      case 'attack':
        return chalk.red("You swing your weapon and deal 10 damage!");
      case 'quit':
        this.isOver = true;
        return chalk.gray("Quitting the game.");
      default:
        return chalk.red("Unknown command. Type 'help' for options.");
    }
  }

  isGameOver() {
    return this.isOver;
  }
}