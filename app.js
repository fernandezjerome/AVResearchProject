const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);

// socket.io server instance
// taken from socket.io documentation

const port = process.env.PORT || 3000;

//app.get is route handler

// tell express where to find static web files
app.use(express.static("public"));
// it is like genrating the request
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/video", (req, res) => {
    // this is pointing index.htmk --> shared page
    res.sendFile(__dirname + "/views/audio.html");
});

app.get("/audio", (req, res) => {
    // this is pointing index.htmk --> shared page
    res.sendFile(__dirname + "/views/audio.html");
});

server.listen(port, () => {
    console.log(`listening on ${port}`);
});

// socket.io event handler
// taken from socket.io documentation
// this will run when a client connects and will log a message to the server console
