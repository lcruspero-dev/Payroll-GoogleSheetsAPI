import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import user from "../server/src/routes/user.route.js";
import auth from "../server/src/routes/auth.route.js";
import payroll from "../server/src/routes/payroll.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.APP_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "X-Requested-With",
      "Accept",
      "X-Project-ID",
    ],
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
    limit: "10mb",
  })
);

app.use("/api/auth/", auth);
app.use("/api/user/", user);
app.use("/api/payrolls/", payroll);

app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({
    error: "Internal Server Error",
  });
});

export default app;
