const express = require("express");
const router = express.Router();

const LikesController = require("../controllers/likes");

router.get("/", LikesController.Index);
router.put("/", LikesController.Update);

module.exports = router;