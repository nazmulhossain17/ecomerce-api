const express = require("express");
const { handleRegister, handleLogin, getAllUsers } = require("../controller/auth.controller");

const authRouter = express.Router();

authRouter.post("/register",  handleRegister);
authRouter.post("/login",  handleLogin);
authRouter.get("/all-user",  getAllUsers);

module.exports = authRouter;