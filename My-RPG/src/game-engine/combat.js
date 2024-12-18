import readline from "readline";
import keypress from "keypress";
import chalk from "chalk"; 

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: true,
});

let playerHealth = 100;
let enemyHealth = 100;
const maxHealth = 100;
const timeLimit = 10;
let timer;
let combatInProgress = true;
let inputLength = 0;

const stringList = [ // change strings here
  "attack with fury", 
  "defend your honor",
  "strike with precision",
  "take no prisoners",
];

function startCombat() {
  if (!combatInProgress) return;

  const targetString =
    stringList[Math.floor(Math.random() * stringList.length)]; // change the sequence here

  console.log(`\nType the following: "${chalk.cyan(targetString)}"`);

  console.log("");
  startTimer(timeLimit);

  keypress(process.stdin);
  process.stdin.on("keypress", () => {
    inputLength = rl.line.length;
  });

  rl.question("Your input: ", (input) => {
    clearInterval(timer);
    checkInput(input, targetString);
  });

  process.stdin.setRawMode(true);
  process.stdin.resume();
}

function displayHealth() {
  console.log(`\n${chalk.green("Player Health")}: ${playerHealth} / ${maxHealth}`);
  console.log(`\n${chalk.red("Enemy Health")}: ${enemyHealth} / ${maxHealth}`);
}

function drawProgressBar(totalTime, timeLeft) {
  const barLength = 20;
  const filledLength = Math.floor((timeLeft / totalTime) * barLength);
  const emptyLength = barLength - filledLength;
  const bar = "█".repeat(filledLength) + "-".repeat(emptyLength);

  readline.moveCursor(process.stdout, 0, -1);
  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);
  process.stdout.write(`${chalk.yellow("Time left:")} [${bar}] ${timeLeft}s`);
  readline.clearLine(process.stdout, 1);
  process.stdout.write("\n");
  readline.cursorTo(process.stdout, 12 + inputLength);
}

function checkInput(input, targetString) {
  if (input === targetString) {
    console.log(`${chalk.green("\nSuccess!")} You dealt ${chalk.red("20")} damage to the enemy! ⚔️`);
    enemyHealth -= 20;
    if (enemyHealth <= 0) {
      console.log(`${chalk.green("\nYou defeated the enemy! 🎉")}`);
      combatInProgress = false;
    }
  } else {
    console.log(`${chalk.red("\nMiss!")} The enemy strikes you for ${chalk.red("15")} damage! 💥`);
    playerHealth -= 15;
    if (playerHealth <= 0) {
      console.log(`${chalk.red("\nYou were defeated by the enemy! 😞")}`);
      combatInProgress = false;
    }
  }

  displayHealth();

  if (combatInProgress) {
    setTimeout(startCombat, 1000);
  } else {
    rl.close();
  }
}

function startTimer(totalTime) {
  let timeLeft = totalTime;

  drawProgressBar(totalTime, timeLeft);

  timer = setInterval(() => {
    timeLeft--;

    readline.cursorTo(process.stdout, 0);
    drawProgressBar(totalTime, timeLeft);

    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log(`${chalk.red("\n\nTime's up!")} The enemy strikes you for ${chalk.red("15")} damage! 💥`);
      playerHealth -= 15;
      displayHealth();
      if (playerHealth <= 0) {
        console.log(`${chalk.red("\nYou were defeated by the enemy! 😞")}`);
        combatInProgress = false;
      }
      if (combatInProgress) {
        setTimeout(startCombat, 1000);
      } else {
        rl.close();
      }
    }
  }, 1000);
}

startCombat();
