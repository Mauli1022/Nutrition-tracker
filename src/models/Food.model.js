import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    calories : {
        type : Number,
        required : true,
    },
    protein : {
        type : Number,
        required : true,
    },
    fat : {
        type : Number,
        required : true,
    },
    fiber : {
        type : Number,
        required : true,
    },
    carbohydrates : {
        type : Number,
        required : true,
    }

},{timestamps : true})

export const Food = mongoose.models.Food || mongoose.model("Food",foodSchema)


/*
"name": "Almonds",
      "calories": 579,
      "protein": 21,
      "fat": 49,
      "fiber": 12.5,
      "carbohydrates": 22
 */

//   Todo : Create end point for creating a new Food