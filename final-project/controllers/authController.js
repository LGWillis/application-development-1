const db = require("../db");
const bcrypt = require("bcrypt");


exports.register = async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || ! email || !password) {
        return res.status(400).json({ error: "All fields required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        "INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)",
        [username, email, hashedPassword],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.status(201).json({ message: "User registered" });
        }
    );
};


exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        async (err, results) => {
            if (err) return res.status(500).json({ error: err.message });

            if (results.length === 0) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            const user = results[0];

            const match = await bcrypt.compare(password, user.password_hash);

            if (!match) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            
            req.session.userId = user.id;

            res.json({ message: "Login successful" });
        }
    );
};


exports.logout = (req, res) => {
    req.session.destroy(() => {
        res.json({ message: "Logged out" });
    });
};