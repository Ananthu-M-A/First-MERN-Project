import asyncHandler from "express-async-handler";
import Admin from "../models/adminModel.js";
import generateTokenAdmin from "../utils/generateTokenAdmin.js";


const authAdmin = asyncHandler(async (req,res) => {
    const { email , password } = req.body;
    const admin = await Admin.findOne({ email });
    if(admin && await admin.matchPasswords(password)){
        generateTokenAdmin(res, admin._id);
        res.status(201).json({
            _id : admin._id,
            name : admin.name,
            email : admin.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid Email or Password..!");
    }
});


const registerAdmin = asyncHandler(async (req,res) => {
    const { name, email, password } = req.body;
    const adminExists = await Admin.findOne({ email });
    if(adminExists){
        res.status(400);
        throw new Error("Admin already exists");
    }
    const admin = await Admin.create({ name, email, password });
    if(admin){
        generateTokenAdmin(res, admin._id);
        res.status(201).json({
            _id : admin._id,
            name : admin.name,
            email : admin.email
        });
    } else {
        res.status(400);
        throw new Error("Invalid admindata");
    }
    res.status(200).json({message: 'Auth Admin'});
});



const logoutAdmin = asyncHandler(async (req,res) => {
    res.cookie('jwt','',{
        httpOnly: true,
        expires: new Date(0),
    })
    res.status(200).json({message: 'Admin logged out'});
});


const getAdminProfile = asyncHandler(async (req,res) => {

    const admin =  {
        _id : req.admin._id,
        name : req.admin.name,
        email : req.admin.email,
    };

    console.log(admin);

    res.status(200).json({message: 'Get Admin Profile'});
});



const updateAdminProfile = asyncHandler(async (req,res) => {

    const admin = await Admin.findById(req.admin._id);
    if (admin) {
        admin.name = req.body.name || admin.name;
        admin.email = req.body.email || admin.email;
        

        if(req.body.password){
            admin.password = req.body.password;
        }
        const updatedAdmin = await admin.save();
        res.status(200).json({
            _id: updatedAdmin._id,
            name: updatedAdmin.name,
            email: updatedAdmin.email,
        });
    } else {
        res.status(404);
        throw new Error('Admin not found.')
    }
    res.status(200).json({message: 'Update Admin Profile'});
});

export { authAdmin, registerAdmin, logoutAdmin, getAdminProfile, updateAdminProfile };