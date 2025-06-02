// require('dotenv').config();
// const mongoose = require('mongoose');

// let connectDb = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL, {
//         //   useNewUrlParser: true,
//         //   useUnifiedTopology: true,
//         });
//         console.log("The DB is connected");
//     } catch (err) {
//         console.error("Error connecting to the database:", err.message);
//     }
// };

// module.exports = connectDb;



require('dotenv').config();
const mongoose = require('mongoose');

let connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("The DB is connected");
    } catch (err) {
        console.error("Error connecting to the database:", err.message);
    }
};

module.exports = connectDb;