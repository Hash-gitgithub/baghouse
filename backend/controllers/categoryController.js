import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

export const createCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({ message: 'name is required' });
        }
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
            return res.status(200).send({
                success: true,
                message: 'category already exist'
            })
        }
        const category = await new categoryModel({ name, slug: slugify(name) }).save();
        res.status(201).send({
            success: true,
            message: 'new category',
            category
        })

    } catch (error) {
        console.log(error);
        res.status(500).send({
            syccess: false,
            message: 'error in category',
            error
        })
    }
}

//update controller

export const updateCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await categoryModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true });
        res.status(200).send({
            success: true,
            message: 'category updated successfully',
            category
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            syccess: false,
            message: 'error in update category',
            error
        })
    }
}

//getting all category

export const categoryController = async (req, res) => {
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success: true,
            message: 'All category list',
            category
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            syccess: false,
            message: 'error in getting all category',
            error
        })
    }
}

//get single category
export const singleCategoryController = async (req, res) => {
    try {
        const category = await categoryModel.findOne({ slug: req.params.slug });
        res.status(200).send({
            success: true,
            message: 'get single category successfully',
            category
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            syccess: false,
            message: 'error in single category',
            error
        })
    }
}

//delete category
export const deleteCategoryController = async (req, res) => {
    try {
        const { id } = req.params;
        await categoryModel.findByIdAndDelete(id);
        res.status(200).send({
            success: true,
            message: 'category deletd successfully'
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            syccess: false,
            message: 'error in deleting category',
            error
        })
    }
}