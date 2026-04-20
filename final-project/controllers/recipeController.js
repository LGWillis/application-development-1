const db = require("../db");


exports.getAllRecipes = (req, res) => {
    db.query("SELECT * FROM recipes", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};


exports.getRecipeById = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM recipes WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }
        res.json(results[0]);
    });
};


exports.createRecipe = (req, res) => {
    const { title, description, instructions } = req.body;

    db.query(
        "INSERT INTO recipes (user_id, title, description, instructions) VALUES (?, ?, ?, ?)",
        [req.session.userId, title, description, instructions],
        (err, result) => {
            if (err) return res.status(500).json({ error: err.message });

            res.status(201).json({ message: "Recipe created" });
        }
    );
};

exports.updateRecipe = (req, res) => {
    res.send("Update recipe");
};

exports.deleteRecipe = (req, res) => {
    res.send("Delete recipe");
};