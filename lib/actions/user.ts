const createUser = async (username: string, email: string) => {
  const res = await fetch("/api/user/create", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
    }),
  });

  const data = await res.json();

  if (!res.ok) {
    return data.message;
  }
};

export { createUser };
