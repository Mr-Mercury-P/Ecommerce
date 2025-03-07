const express = require('express')
const Product = require('../models/Product')
const { authMiddleware, verifyAdmin } = require('../middleware/authMiddleware')

const router = express.Router()

router.post("/add", authMiddleware, verifyAdmin, async (req, res) => {
    try {
        const { name, description, price, category, stock, imageUrl } = req.body
        console.log(name)
        if (!name || !description || !price || !category || !stock || !imageUrl) {
            return res.status(400).json({ "message": "All fields are required" })
        }
        console.log(name)
        const newProduct = new Product({
            name, description, price, category, stock, imageUrl, createdBy: req.user.id
        })
        await newProduct.save()
        return res.status(201).json({ "message": "product added successfully" })
    }
    catch (err) {
        console.log("error from product routes", err)
        return res.status(500).json({ "message": "server error in productroutes" })
    }
})


router.get("/", async (req, res) => {
    try {
        const products = await Product.find()
        res.json(products)
    }
    catch (err) {
        return res.status(500).json({ "message": "server error from fetch products" })
    }
})

router.delete("/:id", authMiddleware, verifyAdmin, async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        if (!product) {
            return res.status(404).json({ "message": "product not found" })
        }
        await product.deleteOne()
        return res.status(200).json({ "message": "product deleted successfully" })
    }
    catch (err) {
        return res.status(500).json({ "message": "server error from delete product" })
    }
})

module.exports = router