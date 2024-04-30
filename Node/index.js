const express = require('express');
const app = express();
const PORT = 3000;
// app.use(express.static('public')); // represents application is serving static webpage in public directory
app.get('/', (req, res) => {
// res.send('Hello World!');
res.sendFile("./index.html",{root:__dirname})
});
app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));