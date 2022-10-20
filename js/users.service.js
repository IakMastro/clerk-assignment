const URL = "https://randomuser.me/api/?seed=t46fds&results=3";

const getUsers = async (page) => {
  const response = await fetch(`${URL}&page=${page}`);
  const users = await response.json();
  return users;
}

export { getUsers };