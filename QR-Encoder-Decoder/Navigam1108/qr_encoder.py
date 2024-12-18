import sys
import base64
import qrcode
import os

def generate_qr(input_file, output_file):
    try:
        #output extension check 
        if not output_file.lower().endswith(".png"):
            output_file += ".png"


        # Check file size
        file_size = os.path.getsize(input_file)
        max_bytes = 2953  #max size possible in qr 40 version

        if file_size > max_bytes:
            print(f"Error: Input file is too large ({file_size} bytes). Max supported size is {max_bytes} bytes.")
            print("Suggestion: Compress or split the file into smaller parts.")
            return

        # read input file and encode to Base64
        with open(input_file, "rb") as f:
            file_data = f.read()
        encoded_data = base64.b64encode(file_data).decode("utf-8")

        # Generate QR code
        qr = qrcode.QRCode(
            version=40,  #largest qr code
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(encoded_data)
        qr.make(fit=True)

        # save the img
        img = qr.make_image(fill="black", back_color="white")
        img.save(output_file)
        print(f"QR Code successfully generated: {output_file}")

    except FileNotFoundError:
        print("Error: Input file not found.")
    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: python3 qr_encoder.py <input_file> <output_image>")
        sys.exit(1)

    input_file = sys.argv[1]
    output_file = sys.argv[2]

    generate_qr(input_file, output_file)
