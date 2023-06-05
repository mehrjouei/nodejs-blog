import express from "express";
import { login } from "../controllers/user";

const router = express.Router();

router.post("/auth/login", login);

export { router as authRoutes };
