import mongoose from "mongoose";

const SubscriberSchema = new mongoose.Schema({
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Please input a valid email address",
    ],
    required: true,
  },
});

export const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", SubscriberSchema);
