const QRCode = require('qrcode');
const readline = require('readline');
const fs = require('fs');

const encodeQR = async (text, outputFile) => {
    try {
        await QRCode.toFile(outputFile, text);
        console.log(`QR Code generated and saved to: ${outputFile}`);
    } catch (error) {
        console.error('Error generating QR Code:', error);
    }
};

const decodeQR = async (filePath) => {
    try {
        const imageBase64 = fs.readFileSync(filePath, { encoding: 'base64' });
        const decoded = await QRCode.toString(imageBase64, { errorCorrectionLevel: 'H' });
        console.log('Decoded QR Code content:', decoded);
    } catch (error) {
        console.error('Error decoding QR Code:', error.message);
    }
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const [,, mode, input, output] = process.argv;

if (mode === 'encode') {
    encodeQR(input, output || 'output.png');
} else if (mode === 'decode') {
    decodeQR(input);
} else {
    console.log('Usage:');
    console.log('  Encode: node index.js encode <text> [output-file]');
    console.log('  Decode: node index.js decode <image-file>');
    rl.close();
}
