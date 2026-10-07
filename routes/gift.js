const express = require("express");
const router = express.Router();
const c=require("../controllers/giftController");

router.get("/",c.getGifts);
router.get("/:id",c.getGiftById);
router.get("/total",c.getGiftTotal);
router.post("/",c.postGifts);
router.put("/:id",c.putGiftById);
router.delete("/:id",c.deleteGiftById);

module.exports = router;

