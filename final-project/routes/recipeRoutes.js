const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const { requireAuth } = require("../middleware/authMiddleware");

router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.getRecipeById);


router.post("/", requireAuth, recipeController.createRecipe);
router.put("/:id", requireAuth, recipeController.updateRecipe);
router.delete("/:id", requireAuth, recipeController.deleteRecipe);

module.exports = router;