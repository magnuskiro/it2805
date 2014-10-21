/*
 * Copyright 2014 Studentmediene i Trondheim AS
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

angular.module('bloggApp.services').

    factory('HttpInterceptor', function ($q, $location, $injector) {
        /*
         This interceptor will intercept http requests that have failed.

         If the reason for failing is 401 it means we are not logged in on our server, so then
         we try to get a ticket from SmmDb and send it to our server to verify the user.
         However, if SmmDb also returns a 401 the user is not logged in there either. So then we redirect
         to SmmDb for login.
         When a ticket has been sent to the server and we got a successful response, the interceptor will try
         to resend all requests that failed and register a logout url in SmmDb.

         If we get a 403 error, that means the user doesn't have authority to do the request.
         */


        // Make sure we only send one request to SmmDb
        var hasSentRequestForTicket = false;

        // Buffer holding all requests that failed
        var resendBuffer = [];

        function addToBuffer(request, deferred) {
            resendBuffer.push({
                request: request,
                deferred: deferred
            })
        }

        function resendAllInBuffer() {
            for (var i = 0; i < resendBuffer.length; i++) {
                resendRequest(resendBuffer[i].request, resendBuffer[i].deferred);
            }
            resendBuffer = [];
        }

        function resendRequest(request, deferred) {
            var $http = $injector.get('$http');
            $http(request).then(
                function (response) {
                    deferred.resolve(response);
                },
                function (response) {
                    deferred.reject(response);
                }
            );
        }

        return {
            'responseError': function (response) {
                // Allow $http requests to handle errors themselves
                if (response.config.bypassInterceptor) {
                    return $q.reject(response);
                }

                // is the problem we're not logged in?
                if (response.status === 401 && (!isInIgnoreList(response.config.url))) {

                    if (!hasSentRequestForTicket) {
                        tryLoginThroughSmmDb();
                    }

                    // add the request to the buffer to be sent later
                    var deferred = $q.defer();
                    addToBuffer(response.config, deferred);
                    return deferred.promise;

                } else if (!isInIgnoreList(response.config.url)) {
                    // show an error message
                    var errorMessage = '';

                    if (response.data.error) {
                        errorMessage = response.data.error;
                    } //else {
                    //errorMessage = response.data;

                    var MessageModal = $injector.get('MessageModal');
                    //MessageModal.error(errorMessage, true);

                }
                return $q.reject(response);
            }
        }
    });
