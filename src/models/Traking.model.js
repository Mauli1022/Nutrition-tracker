import mongoose from "mongoose";

const trakingSchema = new mongoose.Schema(
    {
        // Store User Id from User Collection
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        // Store Food Id from Food collection
        foodId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Food",
            required: true
        },
        eatenDate : {
            type : String,
            default : new Date().toLocaleDateString()
        },
        quantity: {
            type: Number,
            min: 1,
        }
    },
    {
        timestamps: true
    })

export const Traking = mongoose.models.Traking || mongoose.model("Traking", trakingSchema)