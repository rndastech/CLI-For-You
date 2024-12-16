const fs = require('fs');
const QRCode = require('qrcode');

async function generateQRCode(inputFile, outputImage) {
    try {
        if (!fs.existsSync(inputFile)) {
            console.error(`Error: File '${inputFile}' does not exist.`);
            return;
        }
        const fileContent = fs.readFileSync(inputFile);
        const base64Content = fileContent.toString('base64');

        await QRCode.toFile(outputImage, base64Content, {
            errorCorrectionLevel: 'H',
            type: 'png',
            color: {
                dark: '#000000',
                light: '#ffffff',
            },
        });

        console.log(`QR Code successfully saved as '${outputImage}'.`);
    } catch (err) {
        console.error(`An error occurred: ${err.message}`);
    }
}
const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error('Usage: node qr_encoder.js <input_file> <output_image>');
} else {
    const [inputFile, outputImage] = args;
    generateQRCode(inputFile, outputImage);
}
