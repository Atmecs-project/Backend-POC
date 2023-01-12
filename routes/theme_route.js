const express=require('express');
const router=express.Router();
const themeController=require("../controllers/theme_controller");


router.get("/",themeController.getAllThemes);
router.post("/",themeController.addTheme);
router.get("/:id",themeController.getThemeById);
router.put("/:id",themeController.updateThemeById);

module.exports = router;