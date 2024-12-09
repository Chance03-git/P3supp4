const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST endpoint
app.post('/', (req, res) => {
    const { content } = req.body;
    res.json({ content });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
