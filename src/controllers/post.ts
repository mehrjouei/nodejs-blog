import { NextFunction, Response, Request } from "express";
import Post from "../models/post";
import User from "../models/user";
import { AuthRequest } from "../types/authRequest";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const posts = await Post.find();
  return res.json(posts);
};

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const post = await Post.findById(req.params.id);
  return res.json(post);
};

export const addPost = async (req: AuthRequest, res: Response) => {
  const { title, content, image } = req.body;
  const author = await User.findById(req.user.id);
  const newPost = new Post({ title, content, image, author });
  await newPost.save();
  return res.json(newPost);
};
