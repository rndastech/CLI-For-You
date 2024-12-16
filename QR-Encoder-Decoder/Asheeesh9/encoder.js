const fs = require("fs");
const qrcode = require("qrcode");

async function encodeToQR(inputFile, outputImage) {

    if (!fs.existsSync(inputFile)) {
        console.error(`Error: File '${inputFile}' does not exist.`);
        return;
    }

    try {
        // Read input file
        const fileData = fs.readFileSync(inputFile);

        // Generate QR
        await qrcode.toFile(outputImage, fileData.toString(), {
            errorCorrectionLevel: "L",
        });

        console.log(`QR Code saved successfully as '${outputImage}'.`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
    }
}

const args = process.argv.slice(2);

if (args.length !== 2) {
    console.error("Usage: node encoder.js <input_file> <output_image>");
    process.exit(1);
}

const [inputFile, outputImage] = args;
encodeToQR(inputFile, outputImage);
