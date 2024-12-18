const fs = require("fs");
const QRCode = require("qrcode");

const encoder = async (inputFile, outputImage) => {
  try {
    const Buffer = fs.readFileSync(inputFile);
    const base64 = Buffer.toString("base64");
    const qrCodeDataUrl = await QRCode.toDataURL(base64);
    const base64Data = qrCodeDataUrl.replace(/^data:image\/png;base64,/, "");

    fs.writeFileSync(outputImage, base64Data, "base64");
    console.log(`QR Code saved to ${outputImage}`);
  } 
  
  catch (error) {
    console.error("error:", error.message);
  }
};

const [inputFile, outputImage] = process.argv.slice(2);

if (!inputFile || !outputImage) {
  console.log("arguements not provided properly \nuse: node encode.js <input_file> <output_image>");
  process.exit(1);
}

encoder(inputFile, outputImage);
