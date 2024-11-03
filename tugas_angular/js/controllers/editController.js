angular.module('tugas_angular')
    .controller('editController', ['$scope', '$routeParams', '$location', 'NotesService',
    function($scope, $routeParams, $location, NotesService) {
        $scope.note = angular.copy(NotesService.getNote($routeParams.id));
        
        $scope.updateNote = function() {
            NotesService.updateNote($routeParams.id, $scope.note);
            $location.path('/');
        };
    }]);