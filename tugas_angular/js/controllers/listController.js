'use strict';

angular.module('tugas_angular')
    .controller('listController', ['$scope', 'NotesService', function($scope, NotesService) {
        $scope.notes = NotesService.getAllNotes();
        
        $scope.deleteNote = function(index) {
            if (confirm('Are you sure you want to delete this note?')) {
                NotesService.deleteNote(index);
            }
        };
    }]);