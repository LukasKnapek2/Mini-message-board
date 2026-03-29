const express = require("express");
const router = express.Router();
 const controller = require("./controllers/controller");

router.get("/", controller.getAllMessages);
router.get("/new", controller.renderForm);
router.post("/new", controller.insertMessage);
router.get("/message/:id", controller.getMessageById);
router.get("/delete/:id", controller.deleteMessage);

module.exports = router;
