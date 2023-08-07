import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    author: { type: String, required: false },
    publishedAt: { type: Date, required: true },
    timeToRead: { type: Number, required: true },
    content: { type: String, required: true },
    postId: { type: String, required: true, unique: true },
    imageURL: { type: String, required: false },
    imageAlt: { type: String, required: false },
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;