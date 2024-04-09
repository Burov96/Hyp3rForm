const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");


admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body;
    const userDoc = await db.collection("shoppers").doc(email).get();

    if (userDoc.exists) {
      const user = userDoc.data();

      if (user.password === password) {
        const responseData = {
          email: user.email,
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

app.post("/register", async (req, res) => {
  try {
    const {email} = req.body;
    const userDoc = await db.collection("shoppers").doc(email).get();

    if (!userDoc.exists) {
      await db.collection("shoppers").doc(email).set(req.body);
      res.json(req.body);
    } else {
      res.status(401).json("User with that email is already registered!");
    }
  } catch (err) {
    res.status(500).json({error: err.message});
  }
});

exports.api = functions.https.onRequest(app);
