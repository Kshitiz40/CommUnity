const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log("DB Connected Successfully");
    } 
    catch (error) {
        
    }
}