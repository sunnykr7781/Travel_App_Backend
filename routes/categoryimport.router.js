const express = require('express');
const Category = require("../model/category.model");
const categories = require("../data/categories");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try {
            await Category.deleteMany({}); // This replaces Category.remove() in Mongoose >= 4.11.0
            const categoriesInDB = await Category.create(categories.data);
            res.json(categoriesInDB);
        } catch (err) {
            console.error(err);
            res.status(500).json({ message: "Could not add categories to DB" });
        }
    });

module.exports = router;
