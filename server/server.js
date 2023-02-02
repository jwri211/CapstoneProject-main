/**IT6041 Capstone Project - Team Wellington - December 2022
 * "R&E Foundation Web Application"
 * Team Members:
 *  Brayden Dawson
 *  Dwain Aiolupotea
 *  Leone Krauze
 *  John Wright
 * 
 * =================================================================
 * Server.js is the main back-end file that dictates where the API routes
 * to, what packages the server uses, and how it connects to the
 * mongo database.
 */

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const contentRoutes = require("./routes/content");
const userRoutes = require("./routes/user");

// express app
const app = express();

//Allow cross origin requests.
let cors = require("cors");
app.use(cors());

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/content", contentRoutes);
app.use("/api/user", userRoutes);

// database connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listening for requests
    app.listen(process.env.PORT, () => {
      console.log(
        "press ctrl + c to stop server | Database connected & listening on port",
        process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
