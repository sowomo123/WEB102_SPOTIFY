// src/routes/authRoutes.js
const express = require("express");
const { register, login } = require("spotify-backend/src/controllers/authcontroller.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

module.exports = router;
