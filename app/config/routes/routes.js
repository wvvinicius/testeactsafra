angular.module('testActSafra').config(function ($routeProvider) {
    $routeProvider

        .when('/home', {
            templateUrl: 'view/main.html',
            controller: 'searchCharacterCtrl'
        })
        
        .when('/character/:id', {
            templateUrl: 'view/detailsCharacter.html',
            controller: 'detailsCharacterCtrl'
        })

        .otherwise({
            redirectTo: '/home',
            controller: 'searchCharacterCtrl'
        });
})