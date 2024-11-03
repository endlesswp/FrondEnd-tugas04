'use strict';

var app = angular.module('tugas_angular', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/list.html',
            controller: 'ListController'
        })
        .when('/new', {
            templateUrl: 'templates/new.html',
            controller: 'NewController'
        })
        .when('/view/:id', {
            templateUrl: 'templates/view.html',
            controller: 'ViewController'
        })
        .when('/edit/:id', {
            templateUrl: 'templates/edit.html',
            controller: 'EditController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

// Notes Service
app.service('NotesService', [function() {
    var notes = JSON.parse(localStorage.getItem('notes')) || [];

    function saveToLocalStorage() {
        try {
            localStorage.setItem('notes', JSON.stringify(notes));
            console.log('Notes saved:', notes);
        } catch (e) {
            console.error('Error saving notes:', e);
        }
    }

    return {
        getAllNotes: function() {
            return notes;
        },
        addNote: function(note) {
            notes.push(note);
            saveToLocalStorage();
        },
        getNote: function(id) {
            return notes[id];
        },
        updateNote: function(id, note) {
            notes[id] = note;
            saveToLocalStorage();
        },
        deleteNote: function(id) {
            notes.splice(id, 1);
            saveToLocalStorage();
        }
    };
}]);

// List Controller
app.controller('listController', ['$scope', 'NotesService', 
function($scope, NotesService) {
    $scope.notes = NotesService.getAllNotes();
    
    $scope.deleteNote = function(index) {
        if (confirm('Are you sure you want to delete this note?')) {
            NotesService.deleteNote(index);
        }
    };
}]);

// New Controller
app.controller('newController', ['$scope', '$location', 'NotesService', 
function($scope, $location, NotesService) {
    $scope.note = {
        title: '',
        content: ''
    };
    
    $scope.saveNote = function() {
        if ($scope.note.title && $scope.note.content) {
            NotesService.addNote(angular.copy($scope.note));
            $location.path('/');
        }
    };
    
    $scope.cancel = function() {
        $location.path('/');
    };
}]);

// View Controller
app.controller('viewController', ['$scope', '$routeParams', 'NotesService', 
function($scope, $routeParams, NotesService) {
    $scope.note = NotesService.getNote($routeParams.id);
}]);

// Edit Controller
app.controller('editController', ['$scope', '$routeParams', '$location', 'NotesService', 
function($scope, $routeParams, $location, NotesService) {
    $scope.note = angular.copy(NotesService.getNote($routeParams.id));
    
    $scope.updateNote = function() {
        if ($scope.note.title && $scope.note.content) {
            NotesService.updateNote($routeParams.id, $scope.note);
            $location.path('/');
        }
    };
    
    $scope.cancel = function() {
        $location.path('/');
    };
}]);