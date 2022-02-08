angular.module("testActSafra").controller("searchCharacterCtrl", function ($scope, searchCharacterService ) {

    $scope.character = { name: "" }
    $scope.characters = []
    $scope.count;
    $scope.loading = false

    $scope.search = function (term) {
        $scope.loading = true

        searchCharacterService.getCharacter(term).then(function (data) {
                $scope.count = data.data.data.count
                $scope.characters = data.data.data.results
                $scope.loading = false
            })
            .catch(function (error) {
                console.log(error)
                $scope.loading = false
            })
    }

    

})