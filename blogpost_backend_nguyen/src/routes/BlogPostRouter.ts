import { Router } from 'express';
import { 
    getBlogPostController, 
    getBlogPostsController, 
    createBlogPostController,
    deleteBlogPostController,
    editBlogPostController 
} from '../controllers';

export const blogpostRouter = Router();

blogpostRouter.get('/', getBlogPostsController);
blogpostRouter.get('/:id', getBlogPostController);
blogpostRouter.post('/', createBlogPostController);
blogpostRouter.delete('/:id', deleteBlogPostController);
blogpostRouter.put('/:id', editBlogPostController);
