// grab the mongoose module
var mongoose = require('mongoose');

// define our todo model
// module.exports allows us to pass this to other files when it is called
var todoModel = mongoose.model('Todo', {
    name: {
        type: String
    },
    description: {
        type: String
    }
});

module.exports = todoModel;