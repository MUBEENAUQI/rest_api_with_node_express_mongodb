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

const postsRoutes = require("./routes/api/posts");
app.listen(PORT, () => console.log("Server mubeena at  $(PORT)"));

//conect to mongodb
mongooose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//routes
app.use("/api/posts", postsRoutes);
