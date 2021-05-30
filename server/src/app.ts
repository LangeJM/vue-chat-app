import dotenv from "dotenv";
import express, { json } from "express";
// previously >> import { json } from "body-parser";
import conversationRoutes from "./routes/conversations";
import userRoutes from "./routes/users";
import { connectDB } from "./db/db";
import colors from "colors";

dotenv.config();
connectDB();
colors.enable();

const app = express();

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
    res.status(500).json({
      message: err.message,
    });
  }
);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`.cyan);
});

// Will stop the program if unhandled exception, here to stop if there's a db auth problem
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${(err as { message: string }).message}`.red);
  server.close(() => process.exit(1));
});
