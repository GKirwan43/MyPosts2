import { getUser } from "@/lib/backend/user";

const dashboard = async () => {
  try {
    const res = await getUser();

    return <div>{res.name}</div>;
  } catch (e) {}

  return <div>No</div>;
};

export default dashboard;
