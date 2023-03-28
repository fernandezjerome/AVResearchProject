const express = require("express"); // import the express package
const app = express(); // create an express app

const port = process.env.PORT || 3000;

app.use(express.static("public"));
// this i route handler --> listen for upcoming request and send back the response
app.get("/", (req, res) => {
    // this is pointing index.html --> shared page
    res.sendFile(__dirname + "/views/index.html");
});

app.get("/audio", (req, res) => {
    res.sendFile(__dirname + "/views/audio.html");
});

app.get("/video", (req, res) => {
    res.sendFile(__dirname + "/views/video.html");
});

// set up the server to listen for incoming connections at this point
app.listen(port, () => {
    console.log(`listening on ${port}`);
});
