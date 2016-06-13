/**
 * Created by cindy.ren on 6/13/2016.
 */

describe('app.profileService ', function() {
    var profileService, sessionStorage, resource, envService, notificationService;

    var emptyProfile;
    var profile = {name: 'testProfile', user_name: 'username', user_id: 101};

    beforeEach(module('app.security'));
    beforeEach(module('app.config'));

    beforeEach(inject(function (_profileService_, _$sessionStorage_,
                                _$resource_, _envService_, _notificationService_){
        profileService = _profileService_;
        sessionStorage = _$sessionStorage_;
        resource = _$resource_;
        envService = _envService_;
        notificationService = _notificationService_;
    }));

    it("should set profile", function() {
        expect(profileService.profile).toBeUndefined();
        profileService.setProfile(profile);
        expect(sessionStorage.profile).toBe(profile);
    });

    it("should get profile", function() {
        profileService.setProfile(profile);
        expect(profileService.getProfile()).toBe(profile);
    });


    xit("should load profile", function() {
        profileService.setProfile(profile);
        var called = profileService.loadProfile();
        expect(called).toBe(profile);
        console.log(called);
    });

    it("should get profile username", function() {
        spyOn(profileService, 'getProfile').and.callThrough();
        spyOn(notificationService, 'error').and.callThrough();

        profileService.setProfile(emptyProfile);
        profileService.getUserName();
        expect(notificationService.error).toHaveBeenCalledWith("No userName found");

        profileService.setProfile(profile);
        expect(profileService.getUserName()).toBe('username');
    });

    it("should get profile user id", function() {
        spyOn(profileService, 'getProfile').and.callThrough();
        spyOn(notificationService, 'error').and.callThrough();

        profileService.setProfile(emptyProfile);
        profileService.getUserId();
        expect(notificationService.error).toHaveBeenCalledWith("No userId found");

        profileService.setProfile(profile);
        profileService.getUserId();
        expect(profileService.getUserId()).toBe(101);
    });

    it("should get profile name", function() {
        spyOn(profileService, 'getProfile').and.callThrough();
        spyOn(notificationService, 'error').and.callThrough();

        profileService.setProfile(emptyProfile);
        profileService.getName();
        expect(notificationService.error).toHaveBeenCalledWith("No user fullName found");

        profileService.setProfile(profile);
        profileService.getName();
        expect(profileService.getName()).toBe('testProfile');
    });




});