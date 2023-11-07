import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
      } as any);
    } else {
      throw new Error("No MongoDB URI provided.");
    }
  } catch (e) {
    throw new Error("Could not connect to database.");
  }
};

export default connectToDB;
