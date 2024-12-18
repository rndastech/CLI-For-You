import qrcode
import argparse
import os

def encode_file_to_qr(input_file, output_image):
    # Check if file exists
    if not os.path.isfile(input_file):
        print(f"Error: {input_file} does not exist.")
        return

    # Read file content
    try:
        with open(input_file, 'rb') as file:
            file_content = file.read()
    except Exception as e:
        print(f"Error reading the file: {e}")
        return

    # Check file size limit
    max_binary_size = 2953  # Maximum binary data size for QR code version 40 (low error correction)
    file_size = len(file_content)
    if file_size > max_binary_size:
        print(f"Error: The file size ({file_size} bytes) exceeds the maximum QR code capacity of {max_binary_size} bytes.")
        return

    # Generate QR Code
    qr = qrcode.QRCode(
        version=None,  # Adaptive sizing
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(file_content)
    qr.make(fit=True)

    # Save QR code as image
    try:
        img = qr.make_image(fill_color='black', back_color='white')
        img.save(output_image)
        print(f"QR code saved as '{output_image}'")
    except Exception as e:
        print(f"Error saving QR code image: {e}")


def main():
    parser = argparse.ArgumentParser(description='Encode a file into a QR code image.')
    parser.add_argument('input_file', type=str, help='Path to the input file to encode')
    parser.add_argument('output_image', type=str, help='Path to save the output QR code image')

    args = parser.parse_args()
    encode_file_to_qr(args.input_file, args.output_image)

if __name__ == '__main__':
    main()
