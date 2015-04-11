// grab the todo model we just created
var Todo         = require('../models/todo');
var express      = require('express');
var TodoServices = express.Router();

// all the crud operations for todo's

TodoServices.get('/all', function(req, res, next) {
    console.log('Fetching all todos');
    Todo.find(function(err, todo) {
        if (err) {
            next(err);
            res.send(err);
        }

        // return all todo in JSON format
        res.json(todo);
        console.log(todo);
    });

});

TodoServices.post('/addTodo', function(req, res, next) {
    console.log('Adding todo');
    console.log(req.body);
    Todo.create(req.body, function (err, post) {
        if (err){
            next(err);
            res.send(err);
        }
        //return the newly added todo
        res.json(post);
      });
});

TodoServices.delete('/deleteTodo/:id', function(req, res, next) {
    console.log('Delete todo');
    console.log(req.params);
    Todo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err){
            next(err);
            res.send(err);
        }
        //return the deleted todo
        res.json(post);
      });
});


module.exports = TodoServices;