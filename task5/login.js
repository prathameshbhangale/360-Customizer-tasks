import express from 'express';
const app = express();
app.use(express.json());

// for testing database data
const users = [
    { 
        username: 'user1', 
        password: 'password123' 
    }
];

app.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
        success: false,
        error: 'Username and password are required' 
    });
  }

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(404).json({
        success: false,
        error: 'User not found' 
    })
  }

  if (user.password !== password) {
    return res.status(401).json({
        success: false,
        error: 'Invalid password'
    });
  }

  res.json({
    success: true,
    message: 'Login successful' 
  });
});




// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(500).json({ error: 'Internal Server Error' });
});




// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});