import qrcode
import argparse
import os

def encode_file_to_qr(input_file, output_file):
    """
    Encodes the contents of a file into a QR code image.

    Args:
        input_file (str): Path to the input file to encode.
        output_file (str): Path to save the output QR code image.

    Raises:
        FileNotFoundError: If the input file does not exist.
        ValueError: If the file size exceeds the limit for QR encoding.
    """
    # Check if the input file exists
    if not os.path.isfile(input_file):
        raise FileNotFoundError(f"The file '{input_file}' does not exist.")

    # Read the file content in binary mode
    with open(input_file, 'rb') as file:
        file_content = file.read()

    # Check if the content size exceeds the QR code limit
    if len(file_content) > 2953:  # Max binary data for QR code (version 40, error correction M)
        raise ValueError("The file is too large to encode into a single QR code.")

    # Create a QR code object
    qr = qrcode.QRCode(
        version=None,  # Let the library determine the optimal version
        error_correction=qrcode.constants.ERROR_CORRECT_M,  # Medium error correction
        box_size=10,
        border=4,  # Default border size
    )

    # Add the file content to the QR code
    qr.add_data(file_content)
    qr.make(fit=True)

    # Generate the QR code image
    img = qr.make_image(fill_color="black", back_color="white")

    # Save the image to the specified output file
    img.save(output_file)
    print(f"QR code successfully saved to '{output_file}'")

def main():
    # Set up the argument parser
    parser = argparse.ArgumentParser(description="Encode a file into a QR code.")
    parser.add_argument(
        "input_file", type=str, help="Path to the input file to encode."
    )
    parser.add_argument(
        "output_file", type=str, help="Path to save the QR code image (e.g., output.png)."
    )

    # Parse the command-line arguments
    args = parser.parse_args()

    # Call the function to encode the file to a QR code
    try:
        encode_file_to_qr(args.input_file, args.output_file)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
