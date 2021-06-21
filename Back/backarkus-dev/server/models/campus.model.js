const mongoose = require("mongoose");
const { Schema } = mongoose;

const campusSchema = new Schema({
  name: {
    type: String,
    required: [true, "The campus name is required"],
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Campus", campusSchema);
