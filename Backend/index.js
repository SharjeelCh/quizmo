const express = require("express");
const connectDB = require("./Connection/dbConnection");
const userRoutes = require("./Routes/userRoutes");
const cors = require("cors");
const PORT = process.env.PORT || 5003;

connectDB();

const app = express();
app.use(express.json());

const corsOptions = {
 origin: ["http://localhost:3000"],
 methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
 allowedHeaders: ["Content-Type", "Authorization"],
 credentials: true,
};
app.use(cors(corsOptions));

app.use(
 "/api/users",
 (req, res, next) => {
  console.log("Request URL:", req.url);
  next();
 },
 userRoutes
);

app.listen(PORT, () => {
 console.log("Server is running on port: ", PORT);
});
