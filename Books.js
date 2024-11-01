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

//Informational
app.post('/addBooks', (req, res) => {
    res.status(100).send("books created ");
});

//Sucess
app.patch('/updateBooks',  (req, res)=> {
    res.status(200).send("books updated successfully");
    })
//Redirecting    
app.put('/Redirecting', (req, res) => {
     res.status(300).send("Redirecting");
});

//Client Error
app.put('/clientError', (req, res) => {
    res.status(400).send("Invalid request");
});

//Internal Server Error
app.get('/serverError', (req,res) => {
    res.status(500).send("Internal Server error");
});

app.get('/getBooks', (req,res) => {
    res.send(JSON.stringify("Total books are:"+ books.length));
});

const port=3000;
app.listen(port,()=>
{
    console.log("Server listening on port " + port);
})