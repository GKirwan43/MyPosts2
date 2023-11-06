import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (MONGODB_URI) {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
      } as any);

      console.log("MongoDB connection successful.");
    } else {
      console.log("No MongoDB URI found.");
    }
  } catch (e) {
    console.log(e);
  }
};

export default connectToDB;
