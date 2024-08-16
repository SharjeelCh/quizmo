const express = require("express");
const connectDB = require("./Connection/dbConnection");
const userRoutes = require("./Routes/userRoutes");
const PORT = process.env.PORT || 5003;

connectDB();

const app = express();
app.use(express.json());

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
