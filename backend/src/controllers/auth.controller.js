import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import dbPromise from "../config/db.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ message: "Missing fields" });

    if (password.length < 6)
      return res.status(400).json({ message: "Password too short" });

    const db = await dbPromise;

    const existing = await db.get(
      "SELECT * FROM users WHERE email = ?",
      email
    );

    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const hashed = await bcrypt.hash(password, 10);

    await db.run(
      "INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)",
      uuid(),
      name,
      email,
      hashed
    );

    res.status(201).json({ message: "User created" });
  } catch (err) {
    console.error("SIGNUP ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const db = await dbPromise;

    const user = await db.get(
      "SELECT * FROM users WHERE email = ?",
      email
    );

    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    delete user.password;
    res.json({ token, user });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
};
