const prisma = require("../../prisma");
const { hashPassword } = require("../helper/authHelper");

const handleRegister = async (req, res) => {
    try {
      const { name, email, password, phone, address } = req.body;
      if (!name || !email || !password || !address) {
        return res.status(400).json({
          message: "name, email, password, and address are required",
        });
      }
  
      const existingUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (existingUser) {
        return res.status(409).json({
          message: "User already exists, please login",
        });
      }
  
      // register user
      const hashedPassword = await hashPassword(password);
  
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          phone,
          address,
        },
      });
      return res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: error.message,
      });
    }
  };

module.exports = {handleRegister}