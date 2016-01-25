
(function () {

    'use strict';

    angular
        .module('app.consent')
            .directive('ppConsentTryPolicyDropdown', ppConsentTryPolicyDropdown);

            function ppConsentTryPolicyDropdown() {

                var directive = {
                    restrict: 'E',
                    replace: false,
                    templateUrl: 'app/consent/directives/consentTryPolicyDropdown.html',
                    scope: {},
                    bindToController: {
                        documentid: '=',
                        shareforpurposeofuse:'=',
                        option:'=',
                        purposeofusecode:'=',
                        medicaldocuments:'='
                    },
                    controllerAs: 'tryPolicyDropdownVm',
                    controller: TryPolicyDropdownController
                };

                return directive;

                function TryPolicyDropdownController(){
                    var vm = this;
                }
            }
})();