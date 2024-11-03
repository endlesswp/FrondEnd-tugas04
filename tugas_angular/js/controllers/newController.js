'use strict';

angular.module('tugas_angular')
    .controller('newController', ['$scope', '$location', 'NotesService', 
    function($scope, $location, NotesService) {
        // Initialize empty note
        $scope.note = {
            title: '',
            content: ''
        };
        
        // Save note function
        $scope.saveNote = function() {
            if ($scope.note.title && $scope.note.content) {
                NotesService.addNote(angular.copy($scope.note));
                $location.path('/');
            }
        };

        // Cancel function
        $scope.cancel = function() {
            $location.path('/');
        };
    }]);