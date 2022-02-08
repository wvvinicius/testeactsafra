angular.module("testActSafra").service("searchCharacterService", function ($http) {
    this.getCharacter = function (term) {
        return $http.get("https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=" + term + "&ts=iwwuiux&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=fe94b62d5c72eeced0ef38c34e900cf8")
    }
})