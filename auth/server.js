require("dotenv").config();
const express = require("express");
const { Connection } = require("./databse/db");

const userRoute = require("./routes/userRoute");
const authroute = require("./routes/email-verificationRoute");

const cors = require("cors");

const port = process.env.SERVER_PORT | 3000;

const app = express();
Connection();

app.use(cors());
app.use(express.json());

app.use("/api", userRoute);
app.use("/", authroute);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
