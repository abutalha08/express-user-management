const express = require('express');
const app = express();
const port = process.env.PORT || 8000;


app.get('/', (req, res) => {

    res.send('Hello from users world');
})

const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    { id: 3, name: 'Jim Doe', email: 'jim@example.com' }
];

app.get('/users', (req, res) => {
    // res.send('Users are waking up');
    res.send(users);
})

app.get('/products', (req, res) => {
    res.send('Products are showing here');
})




app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
})