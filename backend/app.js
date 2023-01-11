const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.post("/handle", (req, res) => {
    console.log("Connected React");
    console.log(req.body);
    res.redirect("/");
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server have started @ ${PORT}`);
});