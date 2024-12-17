const fs = require("fs");
const QRCode = require("qrcode");

const encoder = async (inputFile, outputImage) => {
  try {
    // Read the contents of the input file as a plain string
    const fileContent = fs.readFileSync(inputFile, "utf8");
    
    // Generate QR Code from the plain text content
    const qrCodeDataUrl = await QRCode.toDataURL(fileContent);
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, "");
    
    // Save the QR Code as an image file
    fs.writeFileSync(outputImage, base64Data, "base64");
    console.log(`QR Code saved to ${outputImage}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

const [inputFile, outputImage] = process.argv.slice(2);

if (!inputFile || !outputImage) {
  console.log("Arguments not provided properly. \nUse: node encode.js <input_file> <output_image>");
  process.exit(1);
}

encoder(inputFile, outputImage);

