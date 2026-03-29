const db = require("../db/queries");

async function getAllMessages(req, res) {
    try {
        const messages = await db.getAllMessages();
        console.log("Messages retrieved from the database: ", messages);
        res.render("index", { title: "Messages", messages: messages });
    } catch (error) {
        console.error("Error retrieving messages: ", error);
        res.status(500).send("An error occurred while retrieving messages.");
    }
}

async function renderForm(req, res) {
    res.render("form", { title: "New Message"});
}

async function insertMessage(req, res) {
    try {
        const { username, text } = req.body;
        await db.insertMessage(username, text);
        res.redirect("/");
    } catch (error) {
        console.error("Error inserting message: ", error);
        res.status(500).send("An error occurred while inserting the message.");
    } 
}

async function getMessageById(req, res) {
    const id = req.params.id;
    try {
        const message = await db.getMessageById(id);
        res.render("message", { title: "Message", message: message });
    } catch (error) {
        console.error("Error retrieving message: ", error);
        res.status(500).send("An error occurred while retrieving the message.");
    }
}

async function deleteMessage(req, res) {
    const id = req.params.id;
    try {
        await db.deleteMessage(id);
        res.redirect("/");
    } catch (error) {
        console.error("Error deleting message: ", error);
        res.status(500).send("An error occurred while deleting the message.");
    }
}


module.exports = {
    getAllMessages,
    renderForm,
    insertMessage,
    getMessageById,
    deleteMessage
}