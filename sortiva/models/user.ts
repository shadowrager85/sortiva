import mongoose, { Document, Model, Schema  } from "mongoose";

interface IUser extends Document{
    name: string;
    email: string;
    password?: string;
    id: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,  
        
})