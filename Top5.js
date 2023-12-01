const express = require('express');
const app = express();
const port = 3000;

// Mock data
let users = [
    { id: 1, name: 'Alice', topFiveMovies: ['Movie1', 'Movie2', 'Movie3', 'Movie4', 'Movie5'] },
    // more users
];

// Endpoint to get a user's top five movies
app.get('/user/:id/topFiveMovies', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user.topFiveMovies);
    } else {
        res.status(404).send('User not found');
    }
});

app.listen(port, () => {
    console.log(`Top Five app listening at http://localhost:${port}`);
});
