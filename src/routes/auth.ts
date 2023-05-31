import express from "express";
import { login } from "../controllers/user";

const router = express.Router();

router.get("/auth/login", login);

export { router as authRoutes };
