#!/usr/bin/env node

import chalk from 'chalk';
import readline from 'readline';
import { GameEngine } from './game-engine/index.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = new GameEngine();

console.log(chalk.green("Welcome to the RPG CLI Game!"));
console.log(chalk.blue("Let's start by entering your name."));

rl.question(chalk.yellow("Enter your name: "), (name) => {
  const welcomeMessage = game.setName(name);
  console.log(chalk.cyan(welcomeMessage));

  if (!game.player.name) {
    console.log(chalk.red("Name cannot be empty. Restart the game to try again."));
    rl.close();
    return;
  }

  console.log(chalk.green("Type 'help' to see the list of commands."));

  rl.on('line', (input) => {
    const output = game.handleCommand(input.trim());
    console.log(output);

    if (game.isGameOver()) {
      console.log(chalk.red("Game Over! Thanks for playing."));
      rl.close();
    }
  });
});

