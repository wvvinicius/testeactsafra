angular.module("testActSafra",).controller("searchCharacterCtrl", function ($scope, $http) {

    $scope.character = { name: "" }
    $scope.characters = []
    $scope.count;
    $scope.loading = false

    $scope.search = function (term) {
        $scope.loading = true
        $http.get("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" + term + "&ts=iwwuiux&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=fe94b62d5c72eeced0ef38c34e900cf8")
            .then(function (data) {
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