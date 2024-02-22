const express = require("express");
const cors = require(`cors`);
const { products, users } = require("./dummy.json");
const app = express();
app.use(cors());
const fetch = require(`fetch`);
const bodyParser = require(`body-parser`);
app.use(express.json());
var fs = require(`fs`);

app.get("/products", (req, res) => {
  res.type = "application/json";
  res.send({ products: products });
});

app.get("/users", (req, res) => {
  res.type = "application/json";
  res.send({ users: users });
});

app.get("/usernames", (req, res) => {
  res.type = "application/json";
  const usernames = users.map((a) => {
    return a.name;
  });
  console.log(usernames);
  res.send({ usernames });
});

app.post("/add-user", (req, res) => {
  const addedUsers = req.body;
  console.log(req.body);
  fs.readFile("dummy.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const jsonFile = JSON.parse(data.toString());
      console.log(jsonFile);
      jsonFile.users.push(addedUsers);
      fs.writeFile("dummy.json", JSON.stringify(jsonFile), (err) => {
        if (err) {
          console.log(err);
          res.send("error happened");
        } else {
          console.log("success");
          res.send("User added success");
        }
      });
    }
  });
  res.status(200);
  res.send("http://localhost:3001/users");
});

app.post("/delete", (req, res) => {
  const deleteUser = req.body;
});

app.listen(3001, () => {
  console.log("Server is listening");
});
