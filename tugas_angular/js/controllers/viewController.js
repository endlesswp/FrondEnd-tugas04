angular.module('tugas_angular')
    .controller('viewController', ['$scope', '$routeParams', 'NotesService',
    function($scope, $routeParams, NotesService) {
        $scope.note = NotesService.getNote($routeParams.id);
    }]);