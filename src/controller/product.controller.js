const prisma = require("../../prisma");

const createProduct = async (req, res) => {
    try {
      const { name, image, category, price, description, ownerId } = req.body;
  
      const product = await prisma.product.create({
        data: {
          name,
          image,
          category,
          price,
          description,
          ownerId,
        },
      });
  
      return res.status(201).json({ message: "Product created successfully", product });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
  
  const getAllProducts = async (req, res) => {
    try {
      const products = await prisma.product.findMany(); // Use Prisma Client's findMany method
      res.status(200).json(products);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    } 
  };

  module.exports = {createProduct, getAllProducts}