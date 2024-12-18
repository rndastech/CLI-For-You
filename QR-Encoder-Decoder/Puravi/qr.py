import qrcode
import argparse
import os

def generate_qr(input_file, output_file):
    # Check if input file exists
    if not os.path.isfile(input_file):
        print(f"Error: File '{input_file}' does not exist.")
        return
    
    # Read the file content
    try:
        with open(input_file, "rb") as file:
            data = file.read()
    except Exception as e:
        print(f"Error reading file: {e}")
        return

    # Generate QR code
    qr = qrcode.QRCode(
        version=1,  # Controls the size of the QR Code
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    # Create and save the QR Code image
    try:
        img = qr.make_image(fill_color="black", back_color="white")
        img.save(output_file)
        print(f"QR Code successfully saved to '{output_file}'")
    except Exception as e:
        print(f"Error saving QR Code: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Encode a file into a QR code.")
    parser.add_argument("input_file", type=str, help="Path to the input file.")
    parser.add_argument("output_file", type=str, help="Path to save the QR code image (e.g., output.png).")

    args = parser.parse_args()
    generate_qr(args.input_file, args.output_file)
