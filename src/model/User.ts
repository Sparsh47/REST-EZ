import mongoose, { Schema, Document } from "mongoose";
import { ResponseSchema } from "./Response";

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    apis: Response[];
}

export const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    apis: [ResponseSchema]
})

const UserModel = mongoose.models.User as mongoose.Model<User> || mongoose.model<User>("User", UserSchema);

export default UserModel;