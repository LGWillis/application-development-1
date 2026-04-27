const db = require("../db");


exports.getAllRecipes = (req, res) => {
    const query = `
        SELECT r.id, r.title, r.description, r.instructions, i.name AS ingredient
        FROM recipes r
        LEFT JOIN ingredients i ON r.id = i.recipe_id
    `;

    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        res.json(results);
    });
};


exports.getRecipeById = (req, res) => {
    const { id } = req.params;

    const query = `
        SELECT r.id, r.title, r.description, r.instructions, i.name AS ingredient
        FROM recipes r
        LEFT JOIN ingredients i ON r.id = i.recipe_id
        WHERE r.id = ?
    `;

    db.query(query, [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }

        res.json(results);
    });
};


exports.createRecipe = (req, res) => {
    const { title, description, instructions, } = req.body;

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
    const { id } = req.params;
    const { title, description, instructions } = req.body;

    db.query("SELECT * FROM recipes WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }

        const recipe = results[0];

        
        if (recipe.user_id !== req.session.userId) {
            return res.status(403).json({ error: "Forbidden" });
        }

        db.query(
            "UPDATE recipes SET title=?, description=?, instructions=? WHERE id=?",
            [title, description, instructions, id],
            (err) => {
                if (err) return res.status(500).json({ error: err.message });

                res.json({ message: "Recipe updated" });
            }
        );
    });
};

exports.deleteRecipe = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM recipes WHERE id = ?", [id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length === 0) {
            return res.status(404).json({ error: "Recipe not found" });
        }

        const recipe = results[0];

        
        if (recipe.user_id !== req.session.userId) {
            return res.status(403).json({ error: "Forbidden" });
        }

        db.query("DELETE FROM recipes WHERE id = ?", [id], (err) => {
            if (err) return res.status(500).json({ error: err.message });

            res.json({ message: "Recipe deleted" });
        });
    });
};