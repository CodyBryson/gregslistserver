import mongoose from "mongoose";
const Schema = mongoose.Schema

const Car = new Schema(
  {
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true, min: 1940, max: 2022 },
    price: { type: Number, required: true },
    description: { type: String, maxlength: 144 },
    imgUrl: { type: String, default: "http://placehold.it/200x200" }
  }
)
export default Car