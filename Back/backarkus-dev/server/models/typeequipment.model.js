const mongoose = require("mongoose");
const { Schema } = mongoose;

const typeequipmentSchema = new Schema({
  name: {
    type: String,
    required: [true, "The type equipment name is required"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Typeequipment", typeequipmentSchema);
