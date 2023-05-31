import express from "express";
import { getAllPosts } from "../controllers/post";
import { authenticateToken } from "../middlewares/auth";

const router = express.Router();

router.get("/posts", getAllPosts);
router.post("/post", authenticateToken, getAllPosts);

export { router as postRoutes };
