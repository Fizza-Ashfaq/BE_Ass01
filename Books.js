const express = require('express');
const app=express();
const books=[
    {  id:1,
       title: "The Catcher in the Rye",
       author: "J.D. Salinger",
       price: 19.99
    },
    {   id:2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: 12.99
    },
    {
        id:3,
        title: "1984",
        author: "George Orwell",
        price: 14.99
    }
]
app.post('/addBooks', (req, res) => {
    // const newBook = req.body;
    // newBook.id = books.length + 1; 
    // books.push(newBook);
    res.send("books created successfully")
});
app.put('/books',  (req, res)=> {
    res.send("books created successfully");
    })
app.delete('/dleteBooks', (req,res) => {
    res.send("books deleted successfully");
});
app.get('/addBooks', (req,res) => {
    res.send(JSON.stringify("Total books are:"+ books.length));
});
const port=8000;
app.listen(port,()=>
{
    console.log("Server listening on port " + port);
})