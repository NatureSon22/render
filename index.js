import express from "express";
import { config } from "dotenv";

config();

const app = express();

app.get("/messages", (req, res) => {
  console.log(req.query);
  res.json({ data: [] });
});

app.get("/messages/:id", (req, res) => {
  console.log(req.params);
  res.json([]);
});

app.all("{*splat}", (req, res) => {
  res.json({ message: "ROUTE NOT FOUND" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
