import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
    try {
        const { name, email, password, address, city } = req.body;
        const userCreate = await userModel.create({ name, email, password, address, city });
        res.status(200).json({ userCreate: userCreate._id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const alterUser = async (req, res) => {
    try {
        const { _id, name, email, phone, password, cpf, birthdate, address, cep, city, uf } = req.body;
        const userAlter = await userModel.updateOne({ name, email, phone, password, cpf, birthdate, address, cep, city, uf });
        res.status(201).json({ userAlter: userAlter });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getUser = async (req, res) => {
    try {
        // const { id } = req.body.auth;
        const idUserT = jwt.decode(req.headers.auth, process.env.HASHTOKEN)

        const user = await userModel.findOne({ _id: idUserT.idUser });
        res.status(200).json({ user: user, id: idUserT.idUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }''
};

export const loginUser = async (req, res) => {
  try {
        const { email, password } = req.body;
        if (!email || !password) {
            return response.status(400).json({ message: "Invalid request body" });
        }

        const userLogin = await userModel.findOne({ email : email, password : password });
        if (!userLogin) {
            return res.status(404).json({ message: "User or password invalid" });
        }
        else if ((userLogin.email != req.body.email) || (userLogin.password != req.body.password)) {
            return res.status(404).json({ message: "User or password invalid 88" });

        };
        const token = jwt.sign({ idUser : userLogin._id}, process.env.HASHTOKEN, {expiresIn: '48h'})
        
        return res.status(200).json({token});

    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
