import "dotenv/config";
import express from "express";
import cors from "cors";
import "./database/connection.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import proposalRoute from "./routes/proposalRoute.js";

const app = express();
//MONGO_DB_URL="mongodb+srv://fabiolosteiro:eAN9sTeobj31cT25@banconovo.yod7azz.mongodb.net/TrocaDisco?retryWrites=true&w=majority&appName=BancoNovo"
app.use(express.json());
app.use(cors());

// Create user
app.use("/Api", userRoute,productRoute,proposalRoute);


app.listen(3000, () => console.log("Server listening on port 3000"));
