import connectToDB from "../mongoose/db";
import User from "../mongoose/models/User";

const getUser = async (uid: string) => {
  await connectToDB();

  const user = User.findOne({
    uid,
  });

  return user;
};

export { getUser };
