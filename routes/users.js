import express from 'express'
import { getAllUsers, getUser, updateUser, deleteUser, updatePassword } from '../controllers/users.js';
import { isAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();


router.get("/checkauth", verifyToken, (req, res, next) => {
    res.send('You are Logged In!')
});

router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send('You are Logged In and You can delete account!')
});


router.put("/:id", verifyUser, updateUser);
//For get user by id
router.get('/:id', verifyUser, getUser);

//For get all users -> for admin section, only admin can see all users
router.get('/', isAdmin, getAllUsers);

router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser, deleteUser);

//Reset password
router.put('/password', updatePassword);

export default router;