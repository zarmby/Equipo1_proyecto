const mongoose = require("mongoose");
const { Schema } = mongoose;

const equipmentSchema = new Schema({
  IDcampus: {
    type: Schema.Types.ObjectId,
    ref: "Campus",
    required: [true, "The campus is required"],
  },
  IDtypeequipment: {
    type: Schema.Types.ObjectId,
    ref: "Typeequipment",
    required: [true, "The Type of equipment is required"],
  },
  mark: {
    type: String,
    required: [true, "The mark is required"],
  },
  model: {
    type: String,
    required: [true, "The model is required"],
  },
  equipmentdescription: {
    type: String,
    required: [true, "The equipment description is required"],
  },
  serialnumber: {
    type: String,
    required: [true, "The serial number is required"],
  },
  enviroment: {
    type: String,
    required: [true, "The enviroment is required"],
  },
  state: {
    type: String,
    required: [true, "The state is required"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Equipment", equipmentSchema);
