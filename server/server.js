const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose.connect(process.env.MONGODB_URL,{
  useNewUrlParser: true,
  useFindAndModify:  false,
  useUnifiedTopology: true,
  useCreateIndex: true
})
 .then(() => console.log("DB connected"))
 .catch(err => console.log("DB connection error:",err))


const authRoutes = require("./routes/auth");

app.use(morgan("dev"));
app.use(bodyParser.json());
if ((process.env.NODE_ENV = "development")) {
  app.use(cors({ origin: "http://localhost:3000" }));
}

app.use("/api", authRoutes);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running ${port}`);
});
