const { urlencoded } = require('express');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended = true}));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

});

app.listen(3000, function() {
    console.log('Server running on port 3000 at https://localhost:3000');
});