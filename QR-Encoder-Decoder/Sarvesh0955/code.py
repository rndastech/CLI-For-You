import sys
import os
import qrcode

def generate_qr_code(input_file, output_image):
    if not os.path.exists(input_file):
        print("file does not exist.")
        sys.exit(1)
    
    try:
        with open(input_file, 'r', encoding='utf-8', errors='ignore') as file:
            file_contents = file.read()
        
        qr = qrcode.QRCode(
            version=None,  
            error_correction=qrcode.constants.ERROR_CORRECT_L,
            box_size=10,
            border=4,
        )
        
        qr.add_data(file_contents)
        qr.make(fit=True)
        
        img = qr.make_image(fill_color="black", back_color="white")
        
        img.save(output_image)
        
        print(f"QR code generated successfully: {output_image}")
    
    except Exception as e:
        print(f"Error generating QR code: {e}")
        sys.exit(1)

def main():
    if len(sys.argv) != 3:
        sys.exit(1)
    
    input_file = sys.argv[1]
    output_image = sys.argv[2]
    
    generate_qr_code(input_file, output_image)

if __name__ == "__main__":
    main()