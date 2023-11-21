import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDb from './config/db.js';
const port = process.env.PORT || 4000;
import userRoutes from './routes/userRoutes.js';
import multer from 'multer';
import mongoose from 'mongoose';
import User from './models/userModel.js'; 
import cors from 'cors';


connectDb();

const app = express();
app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/uploadProfilePic', upload.single('file'), async (req, res) => {
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
});


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('SERVER STARTED'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`SERVER STARTED ON PORT ${port}`));