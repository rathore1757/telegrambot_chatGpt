const express = require("express");

const cors = require("cors");
require("./db/connection");

const router = require("./routes/router");

const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors("*"));
app.use("/", router);

app.listen(process.env.PORT || 2000, () => {
  console.log("connect to port success");
});
