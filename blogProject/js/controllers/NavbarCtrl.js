'use strict';

angular.module('bloggApp.controllers')
    .controller('NavbarCtrl', function ($scope, $location) {

        /*  Checks if the current path is equal to the provided location
            If location ends with %, it will count as a wildcard.
            For instance, /sources% will match /sources/40
            while         /sources will not match /sources/40
        */
        $scope.isActive = function(location) {
            if(location.substring(location.length - 1) === '%') { // If ending with a wildcard
                var start = location.substring(0, location.length - 1);
                return $location.path().substring(0, start.length) === start;
            }

            return location === $location.path();
        };
    });

