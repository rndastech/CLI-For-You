import chalk from 'chalk';
import figlet from 'figlet';
import cliProgress from 'cli-progress';
import ora from 'ora';

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
        await sleep(1000);//a pause after each sentence
    }

    console.log(chalk.blue('=============================================================='));
    console.log(chalk.cyan('Your journey begins now, traveler...'));

    //exiting for now
    process.exit(0);
}

export default displayStory;