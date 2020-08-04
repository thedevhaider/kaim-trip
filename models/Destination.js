const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DestinationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tagline: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    places: [
      {
        type: mongoose.Types.ObjectId,
        ref: "places",
      },
    ],
    thumbnail: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("destinations", DestinationSchema);
