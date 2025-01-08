import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello from ES6 Express!');
});

app.get('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});