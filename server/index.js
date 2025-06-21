import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { databaseConnect } from "./database/db.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["POST", "GET", "PUT", "DELETE"],
  })
);

databaseConnect();
