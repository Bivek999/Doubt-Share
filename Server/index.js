const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const fs = require("fs/promises");

const app = express();
const PORT = 5000;
const SECRET_KEY = "Revly"

app.use(cors());
app.use(bodyParser.json());

const usersFilePath = "users.txt";

async function readUsersFile() {
  try {
    const data = await fs.readFile(usersFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading users file:", error);
    return [];
  }
}

async function writeUsersFile(users) {
  try {
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing users file:", error);
  }
}

// User Registration API with Authentication
app.post("/api/students/register", async (req, res) => {
  const { name, email, password, classGrade } = req.body;

  const users = await readUsersFile();
  const newUser = {
    name,
    email,
    password,
    type,
    classGrade,
    language,
    subject,
  };
  users.push(newUser);

  await writeUsersFile(users);

  const token = jwt.sign({ email }, SECRET_KEY);
  res.status(201).json({ user: newUser, token });
});

// User Login API with Authentication
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  const users = await readUsersFile();
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email }, SECRET_KEY);
  res.json({ user, token });
});

//Student Doubt creation
app.post("/api/doubt", async (req, res) => {
    const { email, doubt, language } = req.body;
    const users = await readUsersFile();
    const user = users.find((u) => u.language === email && u.type === "teacher");
    if (user) {
      return res.status(200).json({ user });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


