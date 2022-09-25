# depois de muito chorar, a versão python foi criada.
import socketio

import serial

read = serial.Serial('/dev/tty', 9600)
testing = True

io = socketio.Client()
io.connect('http://localhost:8087')


if testing:
    io.emit('coffee_taken', {"id": 1})

while True:
    data = read.readline().decode('utf-8')
    print(data)
    io.emit('ping', {'data': data})
