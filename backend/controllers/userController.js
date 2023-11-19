import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Authenticate User & Set Token
// POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req,res) => {
    const { email , password } = req.body;
    const user = await User.findOne({ email });
    if(user && await user.matchPasswords(password)){
        generateToken(res, user._id);
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email
        });
    } else {
        res.status(400);
        throw new Error("Invali Email or Password..!");
    }
});

// Register User
// POST /api/users/
// @access Public
const registerUser = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }
    const user = await User.create({ name, email, password });
    if(user){
        generateToken(res, user._id);
        res.status(201).json({
            _id : user._id,
            name : user.name,
            email : user.email
        });
    } else {
        res.status(400);
        throw new Error("Invali userdata");
    }
    res.status(200).json({message: 'Auth User'});});

// Logout User
// POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req,res) => {
    res.cookie('jwt','',{
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({message: 'User logged out'});
});

// Get user profile
// GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req,res) => {

    const user =  {
        _id : req.user._id,
        _id : req.user.name,
        _id : req.user.email,
    };

    res.status(200).json({message: 'Get User Profile'});
});

// Update user profile
// PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req,res) => {

    const user = await User.findById(req.user._id);
    if (user) {
        user.name = req.body.name || user.name;
        user.name = req.body.email || user.email;

        if(req.body.password){
            user.password = req.body.password;
        }
        const updatedUser = await user.save();
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        });
    } else {
        res.status(404);
        throw new Error('User not found.')
    }
    res.status(200).json({message: 'Update User Profile'});
});

export { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile };