const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const db = require("./models");
const Role = db.ROLES;
const dbConfig = require("./config/db.config");
const userRoute = require("./routes/user.routes");

dotenv.config();
const app = express();

//DB CONNECTION
db.mongoose.set("strictQuery", false);
db.mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.frh00im.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((err) => {
    console.error(err);
    process.exit();
  });

//MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Post Handle
app.use("/api/auth", userRoute);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server has started @ ${PORT}`);
});
