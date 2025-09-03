import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import axios from 'axios';
import { TextField, Button, Card, CardContent, Typography } from '@mui/material';

export function UpdateBlogPost() {
  const { id } = useParams(); // Get blogpost id from URL
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [date, setDate] = useState<string>('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogpost = async () => {
      const res = await axios.get(`http://localhost:3000/blogpost/${id}`);
      const post = res.data;
      setTitle(post.title);
      setBody(post.body);
      setAuthor(post.author);
      setDate(new Date(post.date).toISOString().split('T')[0]);
      setLoading(false);
    };
    fetchBlogpost();
  }, [id]);

  const handleUpdate = async () => {
    await axios.put(`http://localhost:3000/blogpost/${id}`, {
      title,
      body,
      author,
      date,
    });
    navigate('/'); // Redirect after update
  };

  if (loading) return <p>Loading...</p>;

  return (
    <Card sx={{ padding: 4 }}>
      <CardContent>
        <Typography variant="h5">Update BlogPost</Typography>

        <TextField 
          label="Title" 
          fullWidth margin="normal" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField 
          label="Date" 
          fullWidth 
          margin="normal" 
          type="date" 
          value={date} 
          onChange={(e) => setDate(e.target.value)}
        />
        <TextField 
          label="Body" 
          fullWidth margin="normal" 
          multiline rows={4} 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
        />
        <TextField 
          label="Author" 
          fullWidth margin="normal" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />

        <Button variant="contained" color="primary" onClick={handleUpdate} sx={{ marginTop: 2 }}>
          Update BlogPost
        </Button>
      </CardContent>
    </Card>
  );
}

