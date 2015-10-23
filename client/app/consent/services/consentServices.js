/**
 * Created by tomson.ngassa on 9/30/2015.
 */

(function () {
    'use strict';

    function ConsentService($resource, ENVService) {
        var consentResource = $resource(ENVService.pcmApiBaseUrl + "/consents/pageNumber/:pageNumber", {pageNumber: '@pageNumber'});

        return {

            createConsent: function (consent, success, error) {

            },

            deleteConsent: function (id, success, error) {

            },

            updateConsent: function (consent, success, error) {
            },

            listConsent: function (page, success, error) {
                /*var consentList = [{
                    "id": "1",
                    "toDiscloseName": ["VAN DONGEN, MONICA"],
                    "isMadeToName": ["GRIMES, MICHAEL"],
                    "doNotShareClinicalDocumentTypeCodes": [],
                    "doNotShareClinicalDocumentSectionTypeCodes": ["Medications", "Allergies"],
                    "doNotShareSensitivityPolicyCodes": ["Mental health information sensitivity", "HIV/AIDS information sensitivity"],
                    "shareForPurposeOfUseCodes": ["Payment", "Emergency Treatment", "Healthcare Treatment"],
                    "doNotShareClinicalConceptCodes": [],
                    "consentStage": "CONSENT_SAVED",
                    "revokeStage": "NA",
                    "consentStart": 1404446399000,
                    "consentEnd": 1437537600000,
                    "consentStartString": null,
                    "consentEndString": null,
                    "medicalInformationNotDisclosed": true
                }, {
                    "id": "2",
                    "toDiscloseName": ["GRIMES, MICHAEL", "NEVAEH LLC", "CARLSON, GEORGE"],
                    "isMadeToName": ["VAN DONGEN, MONICA", "LUQUIN, TERESA", "MASTER CARE, INC."],
                    "doNotShareClinicalDocumentTypeCodes": [],
                    "doNotShareClinicalDocumentSectionTypeCodes": [],
                    "doNotShareSensitivityPolicyCodes": ["Mental health information sensitivity", "HIV/AIDS information sensitivity"],
                    "shareForPurposeOfUseCodes": ["Payment", "Emergency Treatment", "Healthcare Treatment"],
                    "doNotShareClinicalConceptCodes": [],
                    "consentStage": "CONSENT_SIGNED",
                    "revokeStage": "REVOCATION_NOT_SUBMITTED",
                    "consentStart": 1404446399000,
                    "consentEnd": 1437537600000,
                    "consentStartString": null,
                    "consentEndString": null,
                    "medicalInformationNotDisclosed": true
                }, {
                    "id": "3",
                    "toDiscloseName": ["GRIMES, MICHAEL", "NEVAEH LLC", "CARLSON, GEORGE"],
                    "isMadeToName": ["VAN DONGEN, MONICA", "LUQUIN, TERESA", "MASTER CARE, INC."],
                    "doNotShareClinicalDocumentTypeCodes": [],
                    "doNotShareClinicalDocumentSectionTypeCodes": [],
                    "doNotShareSensitivityPolicyCodes": ["Mental health information sensitivity", "HIV/AIDS information sensitivity"],
                    "shareForPurposeOfUseCodes": ["Payment", "Emergency Treatment", "Healthcare Treatment"],
                    "doNotShareClinicalConceptCodes": [],
                    "consentStage": "CONSENT_SIGNED",
                    "revokeStage": "REVOCATION_REVOKED",
                    "consentStart": 1404446399000,
                    "consentEnd": 1437537600000,
                    "consentStartString": null,
                    "consentEndString": null,
                    "medicalInformationNotDisclosed": true
                }, {
                    "id": "4",
                    "toDiscloseName": ["GRIMES, MICHAEL", "NEVAEH LLC", "CARLSON, GEORGE"],
                    "isMadeToName": ["VAN DONGEN, MONICA", "LUQUIN, TERESA", "MASTER CARE, INC."],
                    "doNotShareClinicalDocumentTypeCodes": [],
                    "doNotShareClinicalDocumentSectionTypeCodes": [],
                    "doNotShareSensitivityPolicyCodes": ["Mental health information sensitivity", "HIV/AIDS information sensitivity"],
                    "shareForPurposeOfUseCodes": ["Payment", "Emergency Treatment", "Healthcare Treatment"],
                    "doNotShareClinicalConceptCodes": [],
                    "consentStage": "CONSENT_SIGNED",
                    "revokeStage": "NA",
                    "consentStart": 1404446399000,
                    "consentEnd": 1437537600000,
                    "consentStartString": null,
                    "consentEndString": null,
                    "medicalInformationNotDisclosed": true
                }
                ];
                return consentList;*/

                consentResource.query({pageNumber: page}, success, error);
            },

            resolveConsentState: function (consent) {
                var state = 'error';
                if (consent.consentStage === 'CONSENT_SAVED' && consent.revokeStage === 'NA') {
                    state = 'saved';
                } else if (consent.consentStage === 'CONSENT_SIGNED' && consent.revokeStage === 'REVOCATION_NOT_SUBMITTED') {
                    state = 'signed';
                } else if (consent.consentStage === 'CONSENT_SIGNED' && consent.revokeStage === 'REVOCATION_REVOKED') {
                    state = 'revoked';
                }
                return state;
            }
        };
    }

    /**
     * The provider service
     *
     */
    angular.module("app.consentServices", ['ngResource', 'app.config'])
        .factory('ConsentService', ConsentService);
})();



