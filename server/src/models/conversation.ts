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

const MessageSchema = new mongoose.Schema({
  email: {
    // type: [SubscriberSchema],
    type: [mongoose.Schema.Types.ObjectId],
    ref: "SubscriberSchema",
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  message: {
    type: String,
    required: true,
    default: "some message",
  },
});

const arrayLimit = (val: any) => {
  return val.length <= 2;
};

const ConversationSchema = new mongoose.Schema({
  subscribers: {
    type: [String],
    // Below is the attempt to embed the Subscriber model
    // type: [mongoose.Schema.Types.ObjectId],
    // ref: "SubscriberSchema",
    required: true,
    validate: [arrayLimit, "{PATH} exceeds the limit of 2"],
  },
  date: {
    type: Date,
    default: new Date(Date.now()),
  },
  messages: [],
});

// export class Conversation {
//   constructor(
//     public id: string,
//     public subscribers: string[],
//     public date: Date,
//     public messages: object[]
//   ) {}
// }

module.exports = mongoose.model("Subscriber", SubscriberSchema);
module.exports = mongoose.model("Conversation", ConversationSchema);

// module.exports = mongoose.model("Message", MessageSchema);
