import qrcode
import sys
import os

def generate_qr(input_file, output_image):
    try:
        # Check if the input file exists
        if not os.path.isfile(input_file):
            print(f"Error: The file '{input_file}' does not exist.")
            return

        # Read the content of the input file
        with open(input_file, 'r') as file:
            content = file.read()

        # Check if the file is empty
        if not content.strip():
            print(f"Error: The file '{input_file}' is empty.")
            return

        # Generate the QR code
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(content)
        qr.make(fit=True)

        # Create an image of the QR code
        img = qr.make_image(fill_color="black", back_color="white")

        # Save the QR code image
        img.save(output_image)
        print(f"QR code generated and saved as '{output_image}'.")

    except Exception as e:
        print(f"An unexpected error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python encode.py <input_file> <output_image>")
    else:
        input_file = sys.argv[1]
        output_image = sys.argv[2]
        generate_qr(input_file, output_image)
