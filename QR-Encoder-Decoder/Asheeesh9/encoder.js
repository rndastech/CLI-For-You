const fs = require("fs");
const qrcode = require("qrcode");
const path = require("path");

async function encodeToQR(inputFile, outputImage) {
    if (!fs.existsSync(inputFile)) {
        console.error(`Error: File '${inputFile}' does not exist.`);
        return;
    }

    try {
        const fileExtension = path.extname(inputFile).toLowerCase();
        let fileData;

        if ([".txt", ".json", ".csv", ".log"].includes(fileExtension)) {
            
            fileData = fs.readFileSync(inputFile, "utf-8");
        } else {
           
            const binaryData = fs.readFileSync(inputFile);
            fileData = binaryData.toString("base64");
        }

        const qrContent = JSON.stringify({
            name: path.basename(inputFile),
            type: fileExtension,
            data: fileData,
        });

        await qrcode.toFile(outputImage, qrContent, {
            errorCorrectionLevel: "M", 
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
