(function () {
    'use strict';

    angular
        .module('app.security')
        .directive('ppOauthLogin', ppOauthLogin);

        function ppOauthLogin() {
            var directive = {
                restrict: 'E',
                replace: true,
                templateUrl: 'app/security/directives/oauthLogin.html',
                scope: {},
                bindToController: {},
                controller: OauthLoginController,
                controllerAs: 'oauthLoginVm'
            };

            return directive;

            /* @ngInject */
            function OauthLoginController(oauthAuthenticationService){
                var vm = this;
                vm.login = login;

                function login(){
                    oauthAuthenticationService.login(vm.user.email, vm.user.password)
                        .then(function(response) {

                            console.log("Success in logging in.");
                            // Redirect user here to login page or perhaps some other intermediate page
                            // that requires email address verification before any other part of the site
                            // can be accessed.
                        })
                        .catch(function(response) {
                            // Handle errors here.
                            console.log("Error in logging in.");
                        });
                }
            }
        }
})();