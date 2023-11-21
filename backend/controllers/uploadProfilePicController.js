import multer from 'multer';
import User from '../models/userModel.js';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const uploadProfilePic = async (req, res) => {
    try {
        const { originalname, buffer } = req.file;

        const profileImage = { filename: originalname, data: buffer };

        const user = await User.findByIdAndUpdate(
            { _id: req.body.userId },
            { $set: { profileImage } },
            { upsert: true, new: true }
        );

        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export default { uploadProfilePic };
