/*
UI services to get the data from the backend
 */

angular.module('TodoUIService', []).factory('Todo', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/todo/all');
        },

        create : function(todo) {
            return $http.post('/todo/addTodo', todo);
        },

        delete : function(id) {
            return $http.delete('/todo/deleteTodo/'+id);
        },

        put : function(todo) {
            return $http.put('/todo/updateTodo/'+id,todo);
        }
    }

}]);