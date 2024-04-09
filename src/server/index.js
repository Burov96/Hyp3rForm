import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { ShopperModel } from "./models/Shopper.js";

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://burov96:123@hyperform.tp4ssrv.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/login", async (req, res) => {
  try {
    const { email, password, fName, lName, country, dob } = req.body;
    const user = await ShopperModel.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        // res.json(`Successfully logged in! Welcome, ${user.email}`);
        const responseData = {
          email: user.email,
          password: user.password,
          fName: user.fName,
          lName: user.lName,
        };
        res.status(200).json(responseData);
      } else {
        res.status(401).json("Wrong password!");
      }
    } else {
      res.status(404).json("User not found!");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json("Internal Server Error");
  }
});

// Wrap the asynchronous code inside an async function
app.post("/register", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await ShopperModel.findOne({ email: email });
    // Use await to wait for the asynchronous operation to complete
    if (!existingUser) {
      const shopper = await ShopperModel.create(req.body);
      res.json(shopper);
    } else {
      res.status(401).json("User with that email is already registered!");
    }
  } catch (err) {
    // Handle errors and send a response
    res.json({ error: err.message });
  }
});

const PORT = 5174;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
