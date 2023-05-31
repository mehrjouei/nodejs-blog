import express from "express";
import { postRoutes } from "./post";
import { authRoutes } from "./auth";
const router = express.Router();

router.use(postRoutes);
router.use(authRoutes);

export { router as routes };
