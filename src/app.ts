import express from 'express';

let app = express();
// let server = http.createServer(app);
let port = 3600
app.listen(port, ()=>{
    console.log(`app listen to the port:${port}`)
});
let todos = [
    {id: 1, task: "Take out trash", completed: false},
    {id: 2, task: "Do laundry", completed: true}
];

app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get('/todos', (req , res) => {
    res.send(todos);
});

