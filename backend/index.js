import express from "express";
import http from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";
import { ArbitrageModel } from "./module/arbitrages.js";

const MONGODB_URL = 'mongodb://localhost:27017/trading'
await mongoose.connect(MONGODB_URL)

process.on('uncaughtException', function (err) {
  console.log('Caught exception: ', err);
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.status(200).send({
    success: true,
    message: "welcome to the beginning of greatness",
  });
});
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("new client connected!");
  socket.on("new_arbitrage_window", async (data) => {
    if( Array.isArray(data) ) {
      // await ArbitrageModel.collection.insertMany(data)
      io.emit("updated_arbitrage_window_data", data);
    }
  });
});

httpServer.listen(8080, () => {
  console.log("server is running on 8080 PROT");
});
