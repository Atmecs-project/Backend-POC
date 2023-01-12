const express=require('express');
const router=express.Router();
const empController=require("../controllers/employee-controller");


router.get("/",empController.getAllEmployees);
router.post("/",empController.addEmployee);
router.get("/:id",empController.getEmpById);
router.put("/:id",empController.updateEmpById);

module.exports = router;