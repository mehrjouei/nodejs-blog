import { NextFunction, Response, Request } from "express";
import Post from "../models/post";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const posts = await Post.find();
  return res.json(posts);
};

export const addPost = async (req: Request, res: Response) => {
  const newPost = new Post({ name: "vahid"});
  await newPost.save();
};
