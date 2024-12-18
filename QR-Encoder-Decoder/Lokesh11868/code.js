const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

const [inputFilePath, outputFilePath] = process.argv.slice(2);

if (!inputFilePath || !outputFilePath) {
    console.error('Usage: node index.js <input file> <output file>');
    process.exit(1);
}

if (!fs.existsSync(inputFilePath)) {
    console.error(`Error: Input file not found: ${inputFilePath}`);
    process.exit(1);
}

(async () => {
    try {
        // Get file extension
        const fileExtension = path.extname(inputFilePath).toLowerCase();

        // Read the file
        const fileContent = fs.readFileSync(inputFilePath);

        // Decide QR content based on file type
        let qrContent;
        if (fileExtension === '.txt') {
            qrContent = fileContent.toString('utf-8'); // Use plain text for .txt files
        } else {
            qrContent = fileContent.toString('base64'); // Use Base64 for binary files
        }

        // Generate QR code
        await QRCode.toFile(outputFilePath, qrContent, {
            errorCorrectionLevel: 'H', // High error correction level
        });

        console.log(`Encoded QR Code to ${outputFilePath}`);
    } catch (error) {
        console.error('Error generating QR code:', error.message);
        process.exit(1);
    }
})();
