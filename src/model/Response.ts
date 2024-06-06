import mongoose, { Schema, Document } from "mongoose";

export interface Response extends Document {
    conversation: string;
    createdAt: Date;
}

export const ResponseSchema: Schema<Response> = new Schema({
    conversation: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})

const ResponseModel = mongoose.models.Response as mongoose.Model<Response> || mongoose.model<Response>("Response", ResponseSchema);