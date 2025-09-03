import { Schema, model } from 'mongoose';

export interface BlogPost {

    title: string;
    body: string;
    author: string;
    date: Date;
}

const BlogPostSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty'],
    },
    body: {
        type: String,
        required:[ true, 'Write something interesting here'],
    },
    
    author: {
        type: String,
        required: [true, 'Name someone who wrote this']
    },

    date: {
        type: Date,
        default: Date.now
    }
})

export const BlogPostModel = model('BlogPost', BlogPostSchema);
