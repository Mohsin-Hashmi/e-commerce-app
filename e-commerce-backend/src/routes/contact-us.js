
const express = require('express');
const contactRoute = express.Router();
const { validateContactUsUser } = require("../utils/validation");
const ContactUs = require('../models/contact');

contactRoute.post('/contact-us', async (req, res) => {
    try {

        const { name, email, message } = req.body;
        validateContactUsUser(req);
        const contact = new ContactUs({
            name,
            email,
            message
        });
        await contact.save();
        res.status(200).json({
            message: "message send successfully"
        })

    } catch (err) {
        res.status(400).send("ERROR : " + err.message);
    }
})

module.exports = contactRoute;