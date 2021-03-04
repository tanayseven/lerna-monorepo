import express from 'express';

const app = express();
const port = 8080;
app.get('/', (req, res) => {
    res.send('Nothing at the root!');
});

type UserResponse = {
    username: string
    firstName: string
    lastName: string
    dateOfBirth: Date,
}

app.get('/users', (req, res) => {
    res.send({username: 'lal123', firstName: 'Laluji', lastName: 'Madlad', dateOfBirth: new Date(1989, 11, 7)} as UserResponse);
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
