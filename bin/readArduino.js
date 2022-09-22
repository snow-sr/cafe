import { SerialPort } from "serialport";
import { ReadlineParser } from "@serialport/parser-readline";
import { io } from "socket.io-client";

const socket = io("http://localhost:8087/");

const port = new SerialPort({ path: "/dev/ttyACM0", baudRate: 9600 });
const parser = port.pipe(new ReadlineParser({ delimiter: "\n" })); // Read the port data

port.on("open", () => {
  console.log("serial port open");

  parser.on("data", (data) => {
    socket.emit("ping", data);
  });
});

socket.on("connect", () => {
  console.log("RPI sucessfully connected to the system");
});
