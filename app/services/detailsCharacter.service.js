angular.module("testActSafra").service("detailsCharacterService", function ($http) {
    this.getCharacterById = function (id) {
        return $http.get("https://gateway.marvel.com:443/v1/public/characters/" + id + "?apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=fe94b62d5c72eeced0ef38c34e900cf8&ts=iwwuiux&")
    }

    this.getSortCharacter = function(offset, limit){
        return $http.get("https://gateway.marvel.com:443/v1/public/characters?limit="+limit+"&offset="+offset+"&apikey=5a237863b3cc2061003cbbc4fe20dc06&hash=fe94b62d5c72eeced0ef38c34e900cf8&ts=iwwuiux&")   
    }
})