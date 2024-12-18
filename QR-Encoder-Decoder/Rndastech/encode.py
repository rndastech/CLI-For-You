import sys
import os
import qrcode
from PIL import Image

def encode_to_qr(input_file, output_image):
    """Encodes the contents of the input file into a QR code image with file extension metadata."""
    if not os.path.exists(input_file):
        print(f"Error: The file '{input_file}' does not exist.")
        return

    try:
        with open(input_file, 'rb') as file:
            file_content = file.read()

        # Get file extension
        file_extension = os.path.splitext(input_file)[1]
        metadata = f"EXT:{file_extension}\n".encode('utf-8')

        # Combine metadata and file content
        data_to_encode = metadata + file_content

        # Check if the combined data size exceeds QR code capacity
        max_binary_size = 2953  # Max bytes for Version 40, Error Correction Level L
        if len(data_to_encode) > max_binary_size:
            print(f"Error: The file size exceeds the maximum QR code capacity of {max_binary_size} bytes.")
            return

        # Generate QR code
        qr = qrcode.QRCode(
            version=40,  # Maximum QR code version
            error_correction=qrcode.constants.ERROR_CORRECT_L,  # Low error correction for maximum data
            box_size=10,
            border=4,
        )
        qr.add_data(data_to_encode)
        qr.make(fit=True)

        # Create and save the QR code image
        img = qr.make_image(fill_color="black", back_color="white")
        img.save(output_image)
        print(f"QR code successfully generated and saved as '{output_image}'.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 qr_tool.py encode <input_file> <output_image>")
    else:
        command = sys.argv[1].lower()
        if command == "encode" and len(sys.argv) == 4:
            input_file = sys.argv[2]
            output_image = sys.argv[3]
            encode_to_qr(input_file, output_image)
        else:
            print("Usage: python3 qr_tool.py encode <input_file> <output_image>")
