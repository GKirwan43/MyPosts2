import mongoose from "mongoose";

const { Schema } = mongoose;

const journalPostSchema = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      maxLength: 100,
      required: true,
    },
    post: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.JournalPost ||
  mongoose.model("JournalPost", journalPostSchema);
