import { getSession } from "@/lib/backend/auth";

export const getUser = async () => {
  const decodedClaims = await getSession();

  return decodedClaims;
};
