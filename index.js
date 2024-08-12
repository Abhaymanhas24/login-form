import express from "express";
import cors from "cors";
import { v4 as uuidv4 } from "uuid";
const { v4 } = require("uuid");
import productRouter from "./routes/products.router.js";

const app = express();
const PORT = process.env.Port || 4000;
app.use(cors());
app.use(express.json());
app.get("/home", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/products", productRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} 💀☠️ ⚡`));
