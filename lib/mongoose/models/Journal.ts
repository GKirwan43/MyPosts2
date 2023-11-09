import mongoose from "mongoose";

const { Schema } = mongoose;

const journalSchema = new Schema(
  {
    uid: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      unique: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 100,
    },
    description: {
      type: String,
      maxLength: 300,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Journal ||
  mongoose.model("Journal", journalSchema);
