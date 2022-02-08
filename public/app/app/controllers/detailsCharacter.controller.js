angular.module("testActSafra").controller("detailsCharacterCtrl", function($scope, $routeParams, detailsCharacterService){

    $scope.character = {}
    $scope.loading = false

    let loadContent = function(){
        $scope.loading = true
        detailsCharacterService.getCharacterById($routeParams.id).then(function(data){
            $scope.character = data.data.data.results[0]
        }).catch(function(error){
            console.log(error)
        })   
    }

    let sortCharacter = function(){
        let limit, offset
        limit = 3
        offset = Math.floor(Math.random() * 100 + 1)

        $scope.otherCharacters = []


        detailsCharacterService.getSortCharacter(offset, limit).then(function(data){
            $scope.otherCharacters = data.data.data.results
            $scope.loading = false
        }).catch(function(error){
            console.log(error)
        })
    }


    loadContent()
    sortCharacter()
})