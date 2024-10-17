import express from 'express';
import rateLimit from 'express-rate-limit';

const app = express();

// Configure rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: {
    error: 'Too many requests from this IP, please try again later.',
  },
});

// Apply the rate limiting middleware to all requests
app.use(limiter);

// API(s) 
app.get('/api/data', (req, res) => {
  res.json({ message: 'API response with rate limiting' });
});

// Start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
