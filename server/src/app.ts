import express from "express";
import { json } from "body-parser";

import conversationRoutes from "./routes/conversations";

const app = express();

app.use(json());

app.use("/conversations", conversationRoutes);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({
      message: err.message,
      additional: "C'mon man, just follow the rules!",
    });
  }
);

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
