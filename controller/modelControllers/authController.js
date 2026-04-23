import jwt from "jsonwebtoken";
import 'dotenv/config';
import User from "../../Model/user.js";
import { userValidate } from "../../secureLayer/loginPageValidate.js";

export const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { error } = userValidate.validate(req.body);

        if(error) return res.status(400).json({ Error : error.details[0].message });

        const userCheck = await User.findOne({email : email});
        if(userCheck) return res.status(400).json("User Exists");

        const user = await User.create({
            email,
            password
        });

        res.status(201).json({
            Email : email,
            status : "Account Created Successfull"
        })

    } catch (error) {
        res.status(500).json(error.message);
    }
}

export  const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const { error } = userValidate.validate(req.body);

        if(error) return res.status(400).json({ Error : error.details[0].message });

        const userCheck = await User.findOne({email : email});
        const genericError = "Invalid Email or Password";

        if(!userCheck) return res.status(401).json(genericError);

        const user = await userCheck.comparedPassword(password);
        if(!user) return res.status(401).json(genericError);

        const accessToken = await jwt.sign(
            {id : userCheck._id.toString()},
            process.env.accessToken,
            {expiresIn : "1d"}
        );

        res.status(200).json({
            status : "Login Successfull",
            accessToken : accessToken,
        });

    } catch (error) {
        res.status(500).json(error.message);
    }
}