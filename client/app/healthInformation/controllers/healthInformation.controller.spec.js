/**
 * Created by tomson.ngassa on 7/20/2015.
 * Modified by cindy.ren on 7/14/2016
 */

'use strict';


describe("app.healthInformation controller", function() {

    beforeEach(module('ui.router'));
    beforeEach(module('app.healthInformation'));

    var $scope, healthInformationService, controller;
    var data = {Documents: "document"};
    var patientData = [data];

    beforeEach(inject(function($rootScope, $controller, _healthInformationService_) {

        $scope = $rootScope.$new();
        healthInformationService = _healthInformationService_;

        controller = $controller('HealthInformationController', {
            $rootScope: $scope,
            patientData: patientData,
            healthInformationService: healthInformationService
        });

    }));

    it('should have correct documents', function(){
       expect(controller.documents).toBe("document");
    });

    it('should expand all accordions in model', function(){
        spyOn($scope, '$broadcast').and.callThrough();
        controller.expandAllAccordions();
        expect($scope.$broadcast).toHaveBeenCalledWith('ExpandAccordions', { expand:true });
        expect(controller.noPatientDataAlert).toBeFalsy();
    });

    it('should collapse all accordions in model', function(){
        spyOn($scope, '$broadcast').and.callThrough();
        controller.collapseAllAccordions();
        expect($scope.$broadcast).toHaveBeenCalledWith('CollapseAccordions', { collapse:true });
        expect(controller.noPatientDataAlert).toBeFalsy();
    });


});
