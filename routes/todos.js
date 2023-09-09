const express = require("express");
const { createData } = require("../controllers/createData");
const { getData, getDatausingId } = require("../controllers/getData");
const { updateData } = require("../controllers/updateData");
const { deleteData } = require("../controllers/deleteData");
const router = express.Router();

router.post("/createData", createData);
router.get("/getData", getData);
router.get("/getDatausingId/:id", getDatausingId);
router.put("/updateData/:id", updateData);
router.delete("/deleteData/:id", deleteData);

module.exports = router;
