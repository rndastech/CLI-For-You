const QRCode = require('qrcode');
const fs = require('fs');

var argv = process.argv.slice(2);
if(argv.length < 2) {
    console.log(`Usage: node index.js <input file> <output file>`);
    process.exit(1);
}

const inputFilePath = argv[0];
const outputFilePath = argv[1];

if (!fs.existsSync(inputFilePath)) {
    console.error(`Input file does not exist: ${inputFilePath}`);
    process.exit(1);
}

const inputData = fs.readFileSync(inputFilePath).toString("base64");

try {
    QRCode.toFile(outputFilePath, inputData).then( () => {
        console.log(`successfully saved to ${outputFilePath}`);
    });
} catch (err) {
    console.error('error occurred ', err);
}