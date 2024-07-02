import "dotenv/config";
import express from "express";
import cors from "cors";
import "./database/connection.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import proposalRoute from "./routes/proposalRoute.js";

const app = express();
app.use(express.json({limit: '50mb'}));
app.use(cors());

// Create user
app.use("/Api", userRoute,productRoute,proposalRoute);

app.listen(3000, () => console.log("Server listening on port 3000"));
