import chalk from 'chalk';
import figlet from 'figlet';
import readlineSync from 'readline-sync';
import cliProgress from 'cli-progress';
import ora from 'ora';

function welcomeMsg() {
    console.log(chalk.green(figlet.textSync('RPG CLI Game', { horizontalLayout: 'full' })));
    console.log(chalk.cyan('Welcome to the RPG CLI Game!'));
    console.log(chalk.yellow('Enter your name to begin your adventure:'));

    const playerName = readlineSync.question('> ');

    console.log(chalk.cyan('\nWelcome, ' + chalk.bold.bgGreen(playerName) + '!'));
    console.log(chalk.yellow('Type "storymode" to begin your journey or "help" to see available commands.\n'));

    return playerName;
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

async function displayStory() {
    const spinner = ora('Generating story ...').start();
    spinner.color = 'yellow';

    await sleep(1000);
    spinner.stopAndPersist({symbol: "✅"});
    spinner.start();

    spinner.color = 'yellow';
    spinner.text = 'Loading world ...';
    
    await sleep(1000);
    spinner.stopAndPersist({symbol: "✅"});
    spinner.start();

    spinner.color = 'red';
    spinner.text = 'Teleporting you ...';

    await sleep(1000);
    spinner.stopAndPersist({symbol: "✅"});

    const bar = new cliProgress.SingleBar({
        format: '{bar} {percentage}% | {value}/{total}',
        barCompleteChar: '\u2588',
        barIncompleteChar: '\u2591',
        hideCursor: true
    }, cliProgress.Presets.shades_classic);

    bar.start(100, 0);

    for(let i=0; i< 100; i++){
        bar.increment();
        await sleep(10);
    }
    await sleep(500);

    console.clear();

    console.log(chalk.green(figlet.textSync('The Awakening', { font: ""})));
    console.log(chalk.blue('=============================================================='));
    await sleep(500);

    const story = [
        {line: "You awaken in a mysterious land with no memory of how you got there."},
        {line: "The world around you is shrouded in fog, and whispers of ancient secrets fill the air.\n"},
        {line: "As you take your first steps, a faint voice echoes in your mind:\n\n"},
        {chalk: chalk.magenta.italic, line: "'The fate of this realm lies in your hands, traveler. Will you rise to the challenge or let darkness consume all?'\n"}
    ];

    for (let i = 0; i < story.length; i++) {
        for(let j=0; j< story[i].line.length; j++){
            let a = story[i].chalk ?? chalk.white.italic;
            process.stdout.write(a(story[i].line[j]));
            await sleep(75);
        }
        if(!story[i].line.endsWith('\n')) process.stdout.write(" ");
        await sleep(1000);
    }

    console.log(chalk.blue('==============================================================\n'));
    console.log(chalk.cyan('Your journey begins now, traveler...'));

    //exiting for now
    process.exit(0);
}

function help() {
    console.log(chalk.yellow('Available Commands:'));
    console.log(chalk.green('storymode') + ' - Begin your adventure.');
    console.log(chalk.green('help') + ' - Show this help menu.');
    console.log(chalk.green('exit') + ' - Exit the game.\n');
}

async function startGame() {
    const playerName = welcomeMsg();
    
    while (true) {
        const input = readlineSync.question('> ').toLowerCase().trim();
        
        //could use switch
        if (input === 'storymode' || input === 'sm') {
            await displayStory();
            break;
        } else if (input === 'help') {
            showHelp();
        } else if (input === 'exit') {
            console.log(chalk.green('Thanks for playing!'));
            break;
        } else {
            console.log(chalk.red('Unknown command. Type "help" for a list of available commands.'));
        }
    }
}

await startGame();
