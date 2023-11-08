import connectToDB from "../mongoose/db";
import User from "../mongoose/models/User";
import { getSession } from "./auth";

// Get a user object from database.
const getUser = async (uid: string) => {
  await connectToDB();

  const user = User.findOne({
    uid,
  });

  return user;
};

// Return whether the session and user are valid.
const getCurrentUser = async () => {
  try {
    const session = await getSession();
    return await getUser(session.uid);
  } catch (e) {
    return;
  }
};

export { getUser, getCurrentUser };
