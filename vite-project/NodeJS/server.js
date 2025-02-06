import express from "express";
import mongoose from "mongoose";
import routes from "./routes/restaurants.routes.js";
import userRoutes from "./routes/users.routes.js";

const app = express();

app.listen(8900, () => {
  console.log("Application running successfully");
});

// Third Party Middleware -- bodyParser.json()

// Built in middlewares
app.use(express.json());
// App level middlewares

function logRequest(req, res, next) {
  console.log("request", req.body);
  next();
}

function printDetails(req, res, next) {
  console.log("Hiii");
  next();
}

app.use(printDetails);

mongoose.connect(
  "mongodb+srv://internshala1:internshala1@cluster0.2u0kq.mongodb.net/"
);

const db = mongoose.connection;

db.on("open", () => {
  console.log("connection is successful");
});

db.on("error", () => {
  console.log("Error in DB connection");
});

routes(app);
userRoutes(app);

// HTTP Methods --- POST , GET, PUT , DELETE

// CRUD Operations --- Create , Read , Update , Delete

app.get("/", (req, res) => {
  res.send("Learning API Creation");
});

const users = [
  {
    id: 1,
    name: "Azeez",
    age: 23,
  },
  {
    id: 2,
    name: "Arpit",
    age: 27,
  },
  {
    id: 3,
    name: "Rhea",
    age: 56,
  },
];

// Fetch list of users

// Route level middlewares
app.get("/users", logRequest, (req, res) => {
  res.send(users);
});

// Create any new user

app.post("/user", (req, res) => {
  const { name, age } = req.body;

  const newUser = {
    id: Math.random() * 10,
    name: name,
    age: age,
  };

  users.push(newUser);

  res.send(users);
});

// Update any user by id

app.put("/user/:id", logRequest, (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const keys = Object.keys(req.body);

  keys.forEach((key) => {
    if (!user[key]) {
      return res.status(404).end("Invalid key");
    }

    user[key] = req.body[key];
  });

  res.json(users);
});

// const user = {
//   "firstname" :"anshika",
//   "lastname": "agarwal"
// }

// Object.keys(user);

// ["firstname" , "lastname"]

// Delete a user by id

app.delete("/user/:id", (req, res) => {
  const id = req.params.id;

  const user = users.find((user) => user.id == id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const filteredUsers = users.filter((user) => user.id != id);

  res.json(filteredUsers);
});
