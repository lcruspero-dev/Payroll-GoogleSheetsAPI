import mongoose from 'mongoose';

const DBKEY = process.env.MONGODB_URI

export const connect = async () => {
    try {
        await mongoose.connect(DBKEY);
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}
