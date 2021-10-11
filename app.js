const { urlencoded } = require('express');
const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set('view engine', 'ejs');

var items = [];
let workItems = [];

app.get("/", function(req, res) {

    var date = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = date.toLocaleDateString("en-US", options);

    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.get('/work', function(req, res) {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    });
});

app.post('/work', function(req, res) {
    let newItem = req.body.newItem;
    workItems.push(newItem);
    res.redirect('/work');
});

app.post("/", function(req, res) {

    var item = req.body.newItem;

    if (req.body.list === 'Work') {
        workItems.push(item);
        res.redirect('/work');
    } else {
        items.push(item);
        res.redirect('/');
    }

    res.redirect("/");
})

app.listen(3000, function() {
    console.log('Server running on port 3000 at http://localhost:3000');
});