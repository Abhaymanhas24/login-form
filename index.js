import express from "express";
import cors from "cors";
import { v4 } from "uuid";

import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/cart.router.js";
import orderRouter from "./routes/order.router.js";
import userRouter from "./routes/user.router.js";
const app = express();
const PORT = process.env.Port || 4000;
app.use(cors());
app.use(express.json());
app.get("/home", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.listen(PORT, () => console.log(`The server started in: ${PORT} 💀☠️ ⚡`));
