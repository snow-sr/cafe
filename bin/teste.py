import serial

newSerial = serial.Serial('/dev/tty', 9600)

newSerial.write("Hello World".encode('utf-8'))
