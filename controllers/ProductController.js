const ProductModel = require('../models/Product')
const getProducts = async(req, res, next) => {
    try {
        const products = await ProductModel.find();
        return res.json({ "status": "ok", "data": products })
    } catch (error) {
        return res.json({ "status": "error", "error": error.message })
    }
}

//Get product by id
const getProductById = async(req, res, next) => {
    try {
        const _id = req.params.productId
        const product = await ProductModel.findById(_id)
        return res.json({ "status": "ok", "data": product })
    } catch (error) {
        return res.json({ "status": "error", "error": error.message })
    }
}

//Get products by category
const getProductsByCategory = async(req, res, next) => {
    try {
        const { category } = req.body;
        const products = await ProductModel.find({
            category: category
        });
        return res.json({ "status": "ok", "data": products });
    } catch (error) {
        return res.json({ "status": "error", "error": error.message })
    }
}

//Add product
const addProduct = async(req, res, next) => {
    try {
        const product = req.body
        await ProductModel.create(product);
        return res.json({ "status": "ok", "info": "Add product successfully" })
    } catch (error) {
        return res.json({ "status": "error", "error": error.message })
    }
}

//Update product
const updateProduct = async(req, res, next) => {
    try {
        const product = req.body;
        await ProductModel.updateOne({ _id: product._id }, product);
        return res.json({ "status": "ok", "info": "Update product successfully" })
    } catch (error) {
        return res.json({ "status": "error", "error": error.message })
    }
}

//Delete product
const deleteProduct = async(req, res, next) => {
    try {
        const id = req.params.id;
        await ProductModel.deleteOne({ _id: id });
        return res.json({ "status": "ok", "info": "Delete product successfully" })
    } catch (error) {
        return res.json({ "status": "error", "error": error.message })
    }
}
module.exports = {
    getProducts,
    getProductById,
    getProductsByCategory,
    addProduct,
    updateProduct,
    deleteProduct
}