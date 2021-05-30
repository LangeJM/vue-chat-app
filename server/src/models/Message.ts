import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
  author: {
    type: String,
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Please input a valid email address",
    ],
    required: true,

    // type: [mongoose.Schema.Types.ObjectId],
    // ref: "SubscriberSchema",
    // required: true,
  },
  recipient: {
    type: String,
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      "Please input a valid email address",
    ],
    required: true,
    // type: [mongoose.Schema.Types.ObjectId],
    // ref: "SubscriberSchema",
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  message: {
    type: String,
    required: true,
    minLength: [1, "You cannot send an empty message."],
    maxLength: [500, "Messages can only contain up to 500 characters."],
    default: "some message",
  },
});

export const Message =
  mongoose.models.Message || mongoose.model("Message", MessageSchema);
