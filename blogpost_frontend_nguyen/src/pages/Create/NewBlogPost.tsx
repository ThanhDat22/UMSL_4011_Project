import { 
    Card, 
    CardContent, 
    Typography,
    Button,
    TextField
} from '@mui/material';

import{ useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export const NewBlogPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [body, setBody] = useState<string>("");
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);


    const createEnabled = title.length > 0 && author.length > 0 && body.length > 0;

    const handleCreate = async () => {
        const url = 'http://localhost:3000/blogpost';
        await axios.post(url, {
            title,
            author,
            body,
            date
        });

        navigate('/'); // Redirect to home page after creating a blog post
    }


    return (
        <Card
            sx={{
                position: 'relative',
                marginBottom: 5,
                padding: 2,
                boxShadow: 3,
                backgroundColor: '#fdf6e3',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: 6,
                },
            }}
        >
        <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
            New Blog Post
            </Typography>

            <TextField 
                label="Date"
                variant="outlined"
                fullWidth
                margin="normal"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            <TextField 
                label="Title" 
                variant="outlined" 
                fullWidth margin="normal" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog post title"
            />

            <TextField 
                label="Author" 
                variant="outlined" 
                fullWidth margin="normal"
                value={author}
                onChange={(e) => setAuthor(e.target.value)} 
                placeholder="Enter author name"
            />

            <TextField 
                label="Body" 
                variant="outlined" 
                fullWidth multiline 
                rows={4} margin="normal"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Enter some interesting content here"
            />

            <Button 
                variant="contained" 
                color="primary" 
                fullWidth sx={{ marginTop: 2 }} 
                disabled={!createEnabled}
                onClick={handleCreate}
            > Create Blog Post
            </Button>

        </CardContent>
    </Card>    
    )

}