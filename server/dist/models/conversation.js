"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversation = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
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
exports.Conversation = mongoose_1.default.models.Conversation ||
    mongoose_1.default.model("Conversation", ConversationSchema);
