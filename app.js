const { urlencoded } = require('express');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items = [];

app.get("/", function(req, res) {

    var date = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = date.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day,
        toDoList: items
    });
});

app.post("/", function(req, res) {

    var item = req.body.newItem;
    items.push(item)

    res.redirect("/");

})

app.listen(3000, function() {
    console.log('Server running on port 3000 at http://localhost:3000');
});