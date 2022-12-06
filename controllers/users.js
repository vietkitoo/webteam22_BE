import User from "../models/User.js";
import bcrypt from 'bcryptjs';

//find by id
export const getUser = async (req, res, next) => {
    try {

        const user = await User.findById(req.params.id);
        res.status(200).json(user);

    } catch(err) {

        next(err);

    }
};

//find all user
export const getAllUsers = async (req, res, next) => {
    try {
        
        const users = await User.find();
        res.status(200).json(users);

    } catch(err) {
        next(err);
    }
};

//reset password
export const updatePassword = async (req, res, next) => {
    try {
        const user = await User.findById(req.body.userId);
        const passwordIsCorrect = await bcrypt.compare(req.body.password, user.password);
        if (!passwordIsCorrect){
            res.status(400).json(
                {
                    status: "Wrong current password"
                }
            );
        } else{
            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.newPassword, salt);
            user.password = hash;
            await user.save();
            res.status(200).json(
                {
                    status: "Reset password successfully"
                }
            );
        }

    } catch(err) {
        next(err);
    }
};