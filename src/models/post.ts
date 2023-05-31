import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  image: { type: String },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("post", PostSchema);
