import express from "express";
import router from ".";

const app = express();
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  return res.status(200).json({ status: "sucess", version: "1.0.0" });
});

app.listen(3333, () => console.log("Server is running..."));
