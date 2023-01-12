const express=require('express');
const router=express.Router();
const layoutController=require("../controllers/layout-controller");


router.get("/",layoutController.getAllLayouts);
router.post("/",layoutController.addLayout);
router.get("/:lid",layoutController.getLayoutById);
router.put("/:lid",layoutController.updateLayoutById);

module.exports = router;