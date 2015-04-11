// grab the todo model we just created
var Todo = require('../models/todo');
var express = require('express');
var TodoServices = express.Router();

// server routes
// handle things like api calls
// authentication routes


TodoServices.get('/all', function(req, res, next) {
    console.log('Fetching notes');
    // use mongoose to get all todos in the database
    Todo.find(function(err, todo) {

        // if there is an error retrieving, send the error.
        // nothing after res.send(err) will execute
        if (err) {
            next(err);
            res.send(err);
        }
        res.json(todo); // return all todo in JSON format
        console.log(todo);
    });

});

module.exports = TodoServices;
