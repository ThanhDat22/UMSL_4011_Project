import { 
    Card, 
    CardContent, 
    Typography,
    Button,
    Dialog,
    DialogActions,
    DialogTitle
} from '@mui/material';

import{ useState } from 'react';
import { useNavigate } from 'react-router';




interface BlogPostCardProps {
    _id: string; // Unique identifier for the blog post
    title: String;
    body: String;
    author: String;
    date: Date;
    onDelete: () => void; // Function to handle delete action
}

export const BlogPostCard = ({
    _id,
    title,
    body,
    author,
    date,
    onDelete, // Function to handle delete action
}: BlogPostCardProps) => {
    const [open, setOpen] = useState(false); // State to manage dialog visibility
    const navigate = useNavigate(); // Hook to navigate to different routes
    return (
        <Card 
            sx={{
                position: 'relative', // Make card a relative container
                marginBottom: 5, 
                padding: 2, 
                boxShadow: 3,
                backgroundColor: '#fdf6e3',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                transform: 'scale(1.02)',
                boxShadow: 6,
                }
            }}
            >

            {/* X Button for delete */}
            <Button 
                variant="text"
                size="small"
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  minWidth: '30px',
                  height: '30px',
                  padding: 0,
                  borderRadius: '50%',
                  fontSize: '24px',
                  fontWeight: 'bold',
                  color: 'black',
                  transition: 'color 0.3s ease',
                  '&:hover': {
                    color: 'red',
                    backgroundColor: 'transparent',
                  },
                }}
                onClick={() => setOpen(true)} // Open the dialog when clicked
            >
                X
            </Button>

            <Button 
                variant="outlined" 
                size="small" 
                color="secondary" 
                sx={{ marginTop: 2 }}
                onClick={() => navigate(`/update/${_id}`)} 
            >Update
            </Button>

                
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom sx={{ color: 'black' }}>
                    {title}
                </Typography>
                <Typography variant="subtitle2" sx={{ color: 'black', fontStyle: 'italic', textAlign: 'center' }}>
                    <p>By {author}</p> on {new Date(date).toDateString()}
                </Typography>
                <p></p>
                <Typography variant="body2" component="p" sx={{ color: 'black' }} align="justify">
                    {body}
                </Typography>
                
            </CardContent>

            <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>Are you sure you want to permanently delete this Blogpost?</DialogTitle>
            <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                Cancel
                </Button>
                <Button 
                onClick={() => {
                    onDelete();
                    setOpen(false); // Close after deleting
                }} 
                color="error"
                variant="contained"
                >
                Yes, Delete
                </Button>
            </DialogActions>
            </Dialog>
        </Card>

    );
}