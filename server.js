const express = require('express');
const path = require('path');
const fileupload = require ('express-fileupload');

let initial_path = path.join(__dirname, "");

const app = express();
app.use(express.static(initial_path));
app.use(fileupload());

app.get('/', (req, res) => {
    res.sendFile(path.join(initial_path, "home.html"));
})

app.get('/editor', (req, res) => {
    res.sendFile(path.join(initial_path, "editor.html"));
})

// Upload Link
app.post('/upload', (req, res) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;
    // create upload
    file.mv(path, (err, result) => {
        if(err){
                throw err;
            } else{
                // our image upload path
                } res.json('uploads/${imagename}')
    })
})


app.listen("3000", () => {
    console.log('listening......');
})