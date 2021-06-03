import dotenv from "dotenv";
import express, { json } from "express";
import cors from "cors";
import conversationRoutes from "./routes/conversations";
import userRoutes from "./routes/users";
import { connectDB } from "./db/db";
import colors from "colors";
import { Socket } from "socket.io";
import { setUserOnline, setUserOffline } from "./controllers/users";
// import helmet from "helmet";

dotenv.config();
connectDB();
colors.enable();

const app = express();
// app.use(helmet());

app.use(cors());

app.use(json());

app.use("/conversations", conversationRoutes);
app.use("/users", userRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(res.statusCode || 500).json({
      message: err.message,
    });
    next();
  }
);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`.cyan);
});

// Socket IO - Todo: Needs to be separate file/module!!
export const io = require("socket.io")(server, {
  cors: true,
});
io.on("connection", function (socket: Socket) {
  socket.on("disconnect", function () {
    setUserOffline(socket.id);
    socket.broadcast.emit("userStatusChange");
  });
  socket.on("newUserOnline", function (token: any) {
    setUserOnline(token, socket.id);
    socket.broadcast.emit("userStatusChange");
  });
  socket.on("newMessage", function (token: any) {
    socket.broadcast.emit("newMessage", token);
  });
});

// Will stop the program if unhandled exception, here to stop if there's a db auth problem
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${(err as { message: string }).message}`.red);
  server.close(() => process.exit(1));
});
