const express = require("express");
const mongooose = require("mongoose");
const app = express();
const cors = require("cors");

//midddleware
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());
const { MONGO_URI } = require("./config");
app.get("/", (req, res) => {
  console.log("test");
  res.send("hello from node");
});

const PORT = 3000 || process.env.PORT;

const FruitOption1Routes = require("./routes/api/filteropts1");
const FruitOptionRoutes = require("./routes/api/fruitopts");
const FruitOption2Routes = require("./routes/api/filteropts2");

app.listen(PORT, () => console.log("Server mubeena at  $(PORT)"));

//conect to mongodb
mongooose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//routes

app.use("/api/Fruits", FruitOption1Routes);
app.use("/api/Fruits", FruitOptionRoutes);
app.use("/api/Fruits", FruitOption2Routes);
