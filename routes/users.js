import { createUser, getUsers } from "../controllers/users.js";

const userRoutes = (req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/api/users") {
    getUsers(req, res);
  }

  if (method === "POST" && url === "/api/users") {
    createUser(req, res);
  }
};

export default userRoutes;
