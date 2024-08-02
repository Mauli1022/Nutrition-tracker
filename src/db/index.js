import mongoose from "mongoose";

export default async function connectDB(){
    const DBName = "NutritionTrakerApi"
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DB_URL}/${DBName}`)
        console.log(`MONGODB CONNECTED || DB HOST : ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log(`MONGODB CONNECTION FAILED ${error.message}`);
    }
}