import qrcode
import sys

def generate_qr_code(input_file, output_image):
        with open(input_file, "r", encoding="utf-8") as file:
            file_content = file.read()
        qr = qrcode.QRCode(
            version=1,
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        qr.add_data(file_content)
        qr.make(fit=True)

        img = qr.make_image(fill_color="black", back_color="white")

        img.save(output_image)
        print(f"QR code successfully saved to {output_image}")

if __name__ == "__main__":
    input_file = sys.argv[1]
    output_image = sys.argv[2]
    generate_qr_code(input_file, output_image)
