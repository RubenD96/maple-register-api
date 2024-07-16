const bcrypt = require('bcrypt');
const axios = require('axios');
const db = require('../models');
const Account = db.account;
const config = require('../config/config.json').development;

exports.register = async (req, res) => {
    try {
        const { name, password, token } = req.body;

        if (!name || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        const secretKey = config.recaptcha;
        const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

        const response = await axios.post(verificationUrl);
        const { success } = response.data;

        if (!success) {
            return res.status(400).json({ message: 'reCAPTCHA verification failed' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        await Account.create({
            name: name,
            password: hashedPassword
        });

        res.status(201).json({ message: 'Account registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
