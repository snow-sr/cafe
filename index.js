import { Server } from "socket.io";
import chalk from "chalk";
const io = new Server(8087, {});

io.on("connection", (socket) => {
  console.log(`connected rpi to the server ${chalk.green("✔")}`);
  console.log(`RPI id: ${chalk.bold.blue(socket.id)} ${chalk.magenta("✔")}`);

  socket.on("ping", (count) => {
    console.log(count);
  });

  socket.on("coffee_taken", (id) => {
    console.log(`coffee ${chalk.bold.blue(id.id)} is taken`);
  });
});
