const express = require("express");
const { handleRegister, handleLogin, getAllUsers, getSingleUser, handleLogout, deleteUser } = require("../controller/auth.controller");

const authRouter = express.Router();

authRouter.post("/register",  handleRegister);
authRouter.post("/login",  handleLogin);
authRouter.get("/all-user",  getAllUsers);
authRouter.get("/all-user/:id", getSingleUser);
authRouter.get("/logout", handleLogout);
authRouter.delete("/delete/:id", deleteUser);


module.exports = authRouter;