const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "Mini Messageboard", messages: messages });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
});

router.get('/message/:id', (req, res) => {
  const id = req.params.id;
  const message = messages[id];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  res.render('message', { message });
});

router.get('/delete/:id', (req, res) => {
  const id = req.params.id;
  const message = messages[id];

  if (!message) {
    return res.status(404).send("Message not found");
  }

  messages.splice(id, 1);
  res.redirect("/");
});
module.exports = router;
