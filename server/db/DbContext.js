import ValueSchema from "../models/Value";
import mongoose from "mongoose";
import CarSchema from "../models/Car";
import HouseSchema from "../models/House";
import JobSchema from "../models/Job";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cars = mongoose.model("Car", CarSchema);

  Houses = mongoose.model("House", HouseSchema);

  Jobs = mongoose.model("Jobs", JobSchema);
}

export const dbContext = new DbContext();
