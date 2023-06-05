import express from "express";
import { addPost, editPost, getAllPosts, getPostById } from "../controllers/post";
import { authenticateToken } from "../middlewares/auth";

const router = express.Router();

router.get("/posts", getAllPosts);
router.get("/post/:id", getPostById);
router.post("/post", authenticateToken, addPost);
router.patch("/post/:id", authenticateToken, editPost);

export { router as postRoutes };
