/*
This file contains all the mongodb schema level information
 */
// grab the mongoose module
var mongoose = require('mongoose');
var todoSchema = new mongoose.Schema({

        name : String,
        deadline : Date,
        priority : Number,
        group : String, //http://mongoosejs.com/docs/subdocs.html
        subtodo : [String]
});


// define our todo model
// module.exports allows us to pass this to other files when it is called
var todoModel = mongoose.model('Todo', todoSchema);
module.exports = todoModel;