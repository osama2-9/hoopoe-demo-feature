import mongoose from "mongoose";

const chiledSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nap: {
    type: String,
    required: true,
  },
  meal: {
    type: String,
    required: true,
  },
  arrived: {
    type: Boolean,
    required: true,
  },
  timeOfArrival: {
    type: Date,
    required: true,
  },
});
const Child = mongoose.model("Child", chiledSchema);
export default Child;
