"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const SubscriberSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        match: [
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
            "Please input a valid email address",
        ],
        required: true,
    },
});
const MessageSchema = new mongoose_1.default.Schema({
    email: {
        // type: [SubscriberSchema],
        type: [mongoose_1.default.Schema.Types.ObjectId],
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
const arrayLimit = (val) => {
    return val.length <= 2;
};
const ConversationSchema = new mongoose_1.default.Schema({
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
// export class Conversation {
//   constructor(
//     public id: string,
//     public subscribers: string[],
//     public date: Date,
//     public messages: object[]
//   ) {}
// }
module.exports = mongoose_1.default.model("Subscriber", SubscriberSchema);
module.exports = mongoose_1.default.model("Conversation", ConversationSchema);
// module.exports = mongoose.model("Message", MessageSchema);
