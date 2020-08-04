const express = require("express");
const mongooose = require("mongoose");
const app = express();
//bodyparser
app.use(express.json());
const { MONGO_URI } = require("./config");
app.get("/", (req, res) => {
  res.send("hello from node");
});

const PORT = process.env.PORT || 5000;
//
const postsRoutes = require("./routes/api/posts");
app.listen(PORT, () => console.log("Server mubeena at  $(PORT)"));

//conect to mongodb
mongooose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//routes
app.use("/api/posts", postsRoutes);
