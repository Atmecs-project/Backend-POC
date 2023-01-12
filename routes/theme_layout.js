const express=require('express');
const router=express.Router();
const layoutController=require("../controllers/layout_controller");


router.get("/",layoutController.getAllLayouts);
router.post("/",layoutController.addLayout);
router.get("/:id",layoutController.getLayoutById);
router.put("/:id",layoutController.updateLayoutById);

module.exports = router;