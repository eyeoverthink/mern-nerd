// db.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();




// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected successfully');
//     } catch (error) {
//         console.error('MongoDB connection error:', error.message);
//         process.exit(1);
//     }
// };
//
// module.exports = connectDB;

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://eyeoverthink:wolverine@cluster0.zic3y.mongodb.net/restaurants?retryWrites=true&w=majority"
            , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        return (1);
    }
};
export default connectDB;