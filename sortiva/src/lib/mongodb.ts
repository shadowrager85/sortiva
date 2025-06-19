import mongoose from 'mongoose';

const MONGODB_URL = process.env.DATABASE_URL as string;

if (!MONGODB_URL) {
  throw new Error('Please define the DATABASE_URL environment variable inside .env.local');
}
 async function connectToDatabase() {
    if (mongoose.connection.readyState >= 1) {
        return mongoose;
    }
    const opts = {
        bufferCommands: false,
    }
    await mongoose.connect(MONGODB_URL, opts);
    return mongoose;
}
export default connectToDatabase;