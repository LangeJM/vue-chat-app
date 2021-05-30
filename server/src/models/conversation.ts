import mongoose from "mongoose";

const arrayLimit = (val: any) => {
  return val.length === 2;
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
    required: true,
    validate: [arrayLimit, "{PATH} must include two entries"],
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
