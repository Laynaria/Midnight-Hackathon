const express = require("express");

const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/authRouter");
const fileRouter = require("./routes/fileRouter");
const vehicleRouter = require("./routes/vehicleRouter");
const userRouter = require("./routes/userRouter");
const authMiddleware = require("./middleware/authMiddleware");
// ce middleware me permet de récuperer le corp json
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(fileRouter);
app.use(userRouter);
app.use(vehicleRouter);
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("🐘");
});

app.get("/admin", authMiddleware, (req, res) => {
  res.send("Hello admin!");
});

module.exports = app;
