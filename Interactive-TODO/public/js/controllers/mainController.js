var todoApp     = angular.module('todoApp', ['ui.bootstrap']);


todoApp.controller('mainController', ['$scope', 'todoUIService', function($scope, todoUIService) {



    // Since new todo are added inside ng-repeat each scope has it's own new todo
    // henco to maintain each , using $index the array is utilized
    // Since array is not initlized automatically initialising the same
    $scope.newTodo = [];
    var getAllTodo = function() {
        // Waiting for the services to return the data then setting the scope variables
        todoUIService.get().then(function(data) {
            $scope.todos = data.data;
            if ($scope.todos !== null) {
                $scope.selectedTodo = $scope.todos[0];
            }
            groupTodo();
        });
    };

    //segregate the todo's based on the group where it belongs
    var groupTodo = function() {
        var groups = [];
        var todos = $scope.todos;
        for (var todo in todos){
            // taking general as the default group if nothing is specified
            if(todos[todo].group === undefined){
                todos[todo].group = constants.DEFAULT_GROUP;
            }
            // creating the array which will have the todos grouped
            if(groups.indexOf(todos[todo].group) == -1){
                groups.push(todos[todo].group) ;
            }
        }
        $scope.groups = groups;
        console.log($scope.groups);
    };
    getAllTodo();


    $scope.populateTodo = function(id) {
        console.log("populate todo");
        var fetchedTodos = $scope.todos;

        for (var todo in fetchedTodos) {
            if (fetchedTodos[todo]._id == id) {
                $scope.selectedTodo = fetchedTodos[todo];
                //making it non editing mode by default
                //when user tries to double click it will be editable
                $scope.selectedTodo.editing = false;
            }
        }
    };

    $scope.submitTodo = function(group, index) {
        var obj = {};
        obj.name = $scope.newTodo[index];
        obj.group = group;
        //create the new todo with the name that is provided
        todoUIService.create(obj).then(function(data) {
            //update the UI data and set the selelcted element to the new todo
            if (data.data !== null) {
                $scope.todos.push(data.data);
                $scope.selectedTodo = data.data;
            }
        });
        //clear the input text box once the todo is submitted
        $scope.newTodo[index] = '';
    };

    $scope.removeTodo = function(id) {
        //delete the given id
        todoUIService.delete(id).then(function(data) {
            //update the UI data with the new todo's
            getAllTodo();
        });
    };

    $scope.submitGroup = function() {
        console.log("submit group");
        var obj = {};
        obj.name = $scope.newGroup;
        obj.group = $scope.newGroup;
        //create the new group
        todoUIService.create(obj).then(function(data) {
            //update the UI data and set the selelcted element to the new todo
            if (data.data !== null) {
                $scope.todos.unshift(data.data);
                groupTodo();
                console.log($scope.todos);
            }
        });
        //clear the input text box once the todo is submitted
        $scope.newGroup = '';
    };

    $scope.submitSubtodo = function() {
        var obj = $scope.selectedTodo;
        obj.subtodo.push($scope.newSubtodo);
        console.log(obj);
        $scope.doneUpdate(obj);
        //clear the input text box once the sub todo is submitted
        $scope.newSubtodo = '';
    };

    $scope.updateTodo = function(selectedTodo){
        //setting the todo to be editable only
        //with this flag it will convert to an input box
        selectedTodo.editing = true;
    };

    $scope.doneUpdate = function(selectedTodo){
                //update the todo with the new values
        todoUIService.put(selectedTodo).then(function(data) {
            console.log(data.data);
            //update the UI data
            for (var todo in $scope.todos) {
                //considering the fact that the id of the todo will remain the same
                if ($scope.todos[todo]._id == selectedTodo._id) {
                    $scope.todos[todo] = selectedTodo;
                    groupTodo();
                    break;
                }
            }
        });
        selectedTodo.editing = false;
    };

}]);
