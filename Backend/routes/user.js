import express from 'express';
import { updateUser,deleteUser,getUser,getUsers } from '../controllers/users.js'
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js'


const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//     res.send("hello user you are logd in")
// } )

// //update and delete user 
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//     res.send("hello user you are logd in and you also can delete your account")
// } )
// //check admin 
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("hello Admin you are logd in and you also can delete all account")
// } )


//update user 
router.put('/:id', verifyUser, updateUser);

//Delete user
router.delete('/:id', verifyUser, deleteUser);

//GET user specific hotel
router.get('/:id', verifyUser,getUser);

//GET all users 
router.get("/", verifyAdmin,getUsers);

export default router