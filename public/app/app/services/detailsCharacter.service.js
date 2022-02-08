angular.module("testActSafra").service("detailsCharacterService", function ($http, global, authHashAPI) {

    let {hash, ts} = authHashAPI.getHash()

    this.getCharacterById = function (id) {
        return $http.get(global.baseUrlAPI+"/characters/" + id + "?apikey="+global.publicKEY+"&hash="+hash+"&ts="+ts+"")
    }

    this.getSortCharacter = function(offset, limit){
        return $http.get(global.baseUrlAPI+"/characters?limit="+limit+"&offset="+offset+"&apikey="+global.publicKEY+"&hash="+hash+"&ts="+ts+"")
    }
})