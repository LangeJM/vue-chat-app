import mongoose from "mongoose";

const arrayLimit = (val: any) => {
  return val.length <= 2;
};

const ConversationSchema = new mongoose.Schema({
  subscribers: {
    type: [
      {
        type: String,
        match: [
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
          "Please input a valid email address",
        ],
      },
    ],
    // Below is the attempt to embed the Subscriber model
    // type: [mongoose.Schema.Types.ObjectId],
    // ref: "SubscriberSchema",
    required: true,
    validate: [arrayLimit, "{PATH} exceeds the limit of two"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  messages: [],
});

export const Conversation =
  mongoose.models.Conversation ||
  mongoose.model("Conversation", ConversationSchema);
