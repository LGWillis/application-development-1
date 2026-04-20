
require("dotenv").config();
require("./db");

const express = require("express");
const session = require("express-session");


const authRoutes = require("./routes/authRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();

app.use(express.json());



app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));


app.use("/auth", authRoutes);
app.use("/recipes", recipeRoutes);

app.get("/", (req, res) => {
    res.json({ message: "API is running" });
});


app.listen(3000, () => console.log("Server running on port 3000"));