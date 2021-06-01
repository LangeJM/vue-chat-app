import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      match: [
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
        "Please input a valid email address",
      ],
      required: true,
    },
    online: {
      type: Boolean,
      required: true,
      default: true,
    },
    socketID: {
      type: String,
      required: true,
      default: "",
    },
    isBlockedBy: [String],
    blocked: [String],
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
