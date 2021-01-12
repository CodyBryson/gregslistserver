import mongoose from "mongoose";
const Schema = mongoose.Schema

const Job = new Schema(

  {
    company: { type: String, required: true },
    jobTitle: { type: String, required: true },
    hours: { type: Number, required: true },
    rate: { type: Number, required: true },
    description: { type: String, required: true, maxlength: 100 },
  }
)

export default Job