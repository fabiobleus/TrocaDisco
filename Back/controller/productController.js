import productModel from "../model/productModel.js";
import userModel from "../model/userModel.js";
import proposalModel from "../model/proposalModel.js";
import jwt from 'jsonwebtoken';


export const productCreate = async (req, res) => {
    // const usid = ;
        const idUserT = jwt.decode(req.headers.auth, process.env.HASHTOKEN)

    try {
         const { title, description, interest, type, category, status, photo } = req.body;
        //const bodyJson = req.body;

        // const usid = req.header.auth;
        // const idUserT = jwt.decode(usid, process.env.HASHTOKEN)
        const product = await productModel.create(  { idUser: idUserT.idUser,title, description, interest, type, category, status, photo });
        res.status(200).json({ productInsert: product._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productUpdate = async (req, res) => {
    try {
        const id = req.params.id
        const { _id, idUser, title, description, interest, type, category, status, photo } = req.body;
        const product = await productModel.updateOne({  title : title, description : description, interest:interest, type: type, category: category, status: status , photo : photo });
        res.status(201).json({ product: product._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productDelete = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.deleteOne({ _id: id });
        res.status(200).json({ product: product._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productGetAll = async (req, res) => {
    try {
        const product = await productModel.find({status: 'Ativo'});
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productGet = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModel.findOne({ _id: id });
        const proposal = await proposalModel.findOne({idProduct : id})
        const idSellerUser = product.idUser
        const seller  = await userModel.findOne({ _id: idSellerUser });

        res.status(200).json({ product , proposal, seller});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const productFindName = async (req, res) => {
    try {
        const { productname } = req.params;
        const product = await productModel.find({
            title: {
                $regex: productname,
                $options: "i"
            }
        });
        res.status(200).json({ product: product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const productFindUser = async (req, res) => {
    const idUserT = jwt.decode(req.headers.auth, process.env.HASHTOKEN)
    try {
        // const { idUser } = req.params;
        const product = await productModel.findOne({idUser :idUserT.idUser});
        res.status(200).json({ product: product });
    } catch (error) {
        res.status(500).json({  idUserT : idUserT.idUser});
    }
};
export const productFindCategory = async (req, res) => {
    try {
        const { category } = req.params;

        const product = await productModel.find({
            category: {
                $regex: category,
                $options: "i"
            },
            status: 'Ativo'
        })
            ;

        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ error: error.message , params: req.params});
    }
};

export const productFindCategoryTitle = async (req, res) => {
    try {
        const { category } = req.params;

        const product = await productModel.find({
            category: {
                $regex: category,
                $options: "i"
            },
            status: 'Ativo'
        })
            ;

        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ error: error.message , params: req.params});
    }
};