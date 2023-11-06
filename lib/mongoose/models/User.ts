import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    uid: {
      type: String,
      unique: true,
      required: true,
    },
    username: {
      type: String,
      minLength: 5,
      maxLength: 25,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User || mongoose.model("User", userSchema);
