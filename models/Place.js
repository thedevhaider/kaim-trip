const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlaceSchema = new Schema(
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
    youtube: {
      type: String,
    },
    duration: {
      type: Number,
    },
    destination: {
      type: Schema.Types.ObjectId,
      ref: "destinations",
    },
    rating: {
      type: Number,
    },
    budget: {
      type: Number,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    banner: {
      type: String,
      required: true,
    },
    schedule: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("places", PlaceSchema);
