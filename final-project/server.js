const express = require("express");
const session = require("express-session");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false
}));

app.get("/", (req, res) => {
    res.json({ message: "API is running" });
});

app.get("/test-db", (req, res) => {
    const db = require("./db");

    db.query("SELECT 1", (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Database working", results });
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});