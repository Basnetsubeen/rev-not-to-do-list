import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

//Database Connection
import { dbConnect } from "./src/config/dbConfig.js";
dbConnect();

import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);

// static content serve
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/client/build")));

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

//Global error handler›
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.status || 500;
  res.json(status)({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error && console.log(error);
  console.log(`Server is running at http://localhost:${PORT}`);
});
