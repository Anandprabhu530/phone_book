import express from "express";
import cors from "cors";
import Chance from "chance";

const app = new express();
const chance = new Chance();

app.use(cors());
app.use(express.json());

const Phone_number = [...Array(250).keys()].map((id) => {
  return {
    id,
    name: chance.name(),
    phone_no: chance.phone(),
  };
});

app.get("", (req, res) => {
  const search_name = req.query.q?.toLowerCase() || "";
  const ans = Phone_number.filter((phone_no) =>
    phone_no.name.toLowerCase().includes(search_name)
  );
  res.send(ans);
});

app.listen(8080, () => {
  console.log("Listening on Port 8080");
});
