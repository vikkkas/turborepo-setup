import express from "express";
import { client } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/data", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await client.user.create({
    data: { username, password },
  });

  res.send(`Received username: ${username} and password: ${password}`);
});

app.listen(3002, () => {
  console.log("HTTP server is running on http://localhost:3002");
});
