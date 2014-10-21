/*
 * Copyright 2014 Studentmediene i Trondheim AS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

// Define the modules
angular.module('bloggApp.controllers', []);
angular.module('bloggApp.filters', []);
angular.module('bloggApp.services', []);
angular.module('bloggApp.directives', []);


// Declare app level module which depends on filters, and services
angular.module('bloggApp', [
        'bloggApp.controllers',
        'bloggApp.filters',
        'bloggApp.services',
        'bloggApp.directives',
        'ngRoute',
        'ui.select2',
        'ui.bootstrap'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        // Admin interfaces
        $routeProvider
            // the landing page for each person.
            .when('/',
            {
                templateUrl: 'partials/main.html',
                controller: 'BloggCtrl',
                title: "ØL-Blogg"
            }
        )

            .otherwise({redirectTo: '/'});
    }]).
    config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');
    }]).

    run(['$location', '$rootScope', 'TitleChanger', function ($location, $rootScope, TitleChanger) {
        // Whenever there is a route change, we try to update the url with the title set in the rootprovider above
        // if there is no title, we clear it
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            if (current.$$route && current.$$route.title) {
                TitleChanger.setTitle(current.$$route.title);
            } else {
                TitleChanger.setTitle("");
            }
        });
    }]);

