const { urlencoded } = require('express');
const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {

    var date = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    var day = date.toLocaleDateString("en-US", options);

    res.render("list", {
        kindOfDay: day
    });
});

app.post("/", function(req, res) {

    console.log(req.body.newItem);
    // var toDoList = [];

    // var newItem = req.body.newItem;
    // toDoList.push(newItem);

    // res.render("list", {
    //     toDos: toDoList,
    //     kindOfDay: "hello"
    // })
})

app.listen(3000, function() {
    console.log('Server running on port 3000 at https://localhost:3000');
});