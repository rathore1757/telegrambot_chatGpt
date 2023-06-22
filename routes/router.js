const router = require("express").Router();
// const { get } = require("../controller/user");
const { fetch } = require("../bot");

// router.get("/", get);
router.get("/", fetch);

module.exports = router;
