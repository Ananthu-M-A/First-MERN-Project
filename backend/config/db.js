import mongoose, { mongo } from "mongoose";

const connectDb = async () => {
try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`Mongodb Connected: ${connect.connection.host}`);
} catch (error) {
    console.error(error.message);
    process.exit(1);
}
}

export default connectDb;