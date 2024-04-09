import mongoose, { Schema } from "mongoose";


const ShopperSchema = new mongoose.Schema({
    email: String,
    password: String,
    fName: String,
    lName: String,
    country: String,
    dob: String,
    registrationDate: String,
});
export const ShopperModel = mongoose.model('Shopper', ShopperSchema);