import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { BlogPostCard } from './components';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';


interface BlogPost {
  _id: string;
  title: string;
  body: string;
  author: string;
  date: Date;
}

function App() {
  const navigate = useNavigate();

  const [blogposts, setBlogposts] = useState<BlogPost[]>([]);

  const getBlogposts = async () => {
    const url = 'http://localhost:3000/blogpost';

    const result = await axios.get(url);
    setBlogposts(result.data);
  };

  const deleteBlogpost = async (id: string) => {
    const url = `http://localhost:3000/blogpost/${id}`;

    await axios.delete(url);
    await getBlogposts();
  }

  useEffect(() => {
    getBlogposts();
  }, []);


  return (
    <div style={{ textAlign: 'center' }}>
      <Button 
      variant="contained" 
      color="primary" 
      sx={{ marginBottom: 4 }}
      onClick={() => navigate('/create')}
    >
    Create New BlogPost
  </Button>
      {blogposts.length === 0 ? (
        <div>NO BlogPosts Found</div>
      ) : (
        <>
          <p>Total BlogPosts: {blogposts.length}</p>

          {/*Loop through and render ALL BlogPosts */}
          {blogposts
            .slice()
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .map((post)  => (
            <BlogPostCard
              key={post._id}
              _id={post._id}
              {...post}
              onDelete={async () => {
                await deleteBlogpost(post._id);
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App
