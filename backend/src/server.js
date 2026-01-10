import dotenv from "dotenv";
import app from "./app.js";
import { initDB } from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await initDB();

    app.listen(PORT, () => {
      console.log("SQLite DB ready");
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err);
  }
};

startServer();
