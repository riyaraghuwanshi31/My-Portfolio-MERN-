import express from "express";
import { conn } from "./db/conn.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";

const app = express();

dotenv.config({ path: "./config/config.env" });


app.use(
  cors({
    origin: ["https://my-portfolio-mern-taupe.vercel.app"],
    methods: ["POST"],
    credentials: true,
  })
); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Done",
  });
});  

app.use("/api/v1/message", messageRouter);

conn();

export default app;
