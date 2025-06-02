const express = require("express");
const connectDb = require('./Config/database');
const cors = require("cors");
const userRoutes = require('./routes/userRoutes');
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
dotenv.config();

connectDb();

const corsOptions = {
  origin: "https://clone-limeroad.vercel.app",
  credentials: true,
};


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));  // Use configured CORS
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
