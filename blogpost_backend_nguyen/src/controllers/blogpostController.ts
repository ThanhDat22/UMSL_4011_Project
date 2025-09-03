import { NextFunction, Request, Response } from "express";

import { 
    getBlogPost, 
    getBlogPosts, 
    createBlogPost,
    deleteBlogPost,
    editBlogPost 
} from "../services";


export const getBlogPostController = async (
    req: Request, 
    res: Response, 
    next: NextFunction
) => {
    const id = req.params.id;

    const result = await getBlogPost(id);

    if (!result) {
        res.status(404).send('Blog post not found');
        next();
        return;
    }

    res.send(result);
    next();

}

export const getBlogPostsController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const result = await getBlogPosts();
    res.send(result);
    //next(); 
}

export const createBlogPostController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const blogpost = req.body;

    if (!blogpost.date) {
        blogpost.date = new Date();
    }

    const result = await createBlogPost(blogpost);

    res.status(201).send({
        blogpost: result,
        success: true,
        msg: 'Blog post created successfully'
    })
}

export const deleteBlogPostController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;

    const result = await deleteBlogPost(id);

    if (result) {
        res.send('Success')
    } else {
        res.status(404).send('Blog post not found');
    }
    
}

export const editBlogPostController = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const id = req.params.id;
    const blogpost = req.body;

    if (!blogpost.date) {
        blogpost.date = new Date();
    }

    const result = await editBlogPost(id, blogpost);

    if (result) {
        res.send(result);
    } else {
        res.status(404).send('Blog post not found');
    }
}