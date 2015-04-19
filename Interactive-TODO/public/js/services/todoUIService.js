/*
UI services to get the data from the backend
 */
var todoApp = angular.module('todoApp');

todoApp.factory('todoUIService', ['$http', function($http) {

    return {
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
            console.log(todo);
            return $http.put('/todo/updateTodo/'+todo._id,todo);
        }
    };

}]);
