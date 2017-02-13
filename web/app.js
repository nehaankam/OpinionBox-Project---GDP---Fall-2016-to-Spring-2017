var app = angular.module("myApp", ["ui.router","ngCookies",'ui.bootstrap','xeditable']);
app.constant("url","services/index.php");


app.config(function ($stateProvider,$urlRouterProvider, $locationProvider) {
   $urlRouterProvider.otherwise("/login");
    $stateProvider.state("login", {
        url: "/login",
        controller: "LoginController",
        templateUrl: "web/views/login.html"

    });
    $stateProvider.state("adminHome", {
        url: "/adminHome",
        controller: "adminController",
        templateUrl: "web/views/adminHomepage.html"
    });
    $stateProvider.state("viewModifyFaculty", {
        url: "/viewModifyFaculty",
        controller: "adminController",
        templateUrl: "web/views/viewModifyFaculty.html"
    });
    $stateProvider.state("addFaculty", {
        url: "/addFaculty",
        controller: "adminController",
        templateUrl: "web/views/addFaculty.html"
    });

    $stateProvider.state("facultyHome", {
        url: "/facultyhome",
        controller: "facultyController",
        templateUrl: "web/views/facultyHomepage.html"
    });
    $stateProvider.state("addCourse", {
        url: "/addCourse",
        controller: "createCourseController",
        templateUrl: "web/views/addCourse.html"
    });
    $stateProvider.state("modifyCourse", {
        url: "/viewModifyCourse",
        controller: "facultyController",
        templateUrl: "web/views/viewModifyCourse.html"
    });
    $stateProvider.state("viewCourse", {
        url: "/viewCourse/:courseid",
        controller: "courseViewController",
        templateUrl: "web/views/viewCourse.html"
    });
    $stateProvider.state("viewGroups", {
        url: "/viewGroups/:courseid",
        controller: "groupViewController",
        templateUrl: "web/views/viewGroups.html"
    });
    $stateProvider.state("addQuestions", {
        url: "/addQuestions/:courseid",
        controller: "addQuestionsController",
        templateUrl: "web/views/addQuestions.html"
    });
    $stateProvider.state("studentHome", {
        url: "/studenthome",
        controller: "studentController",
        templateUrl: "web/views/studentHomepage.html"
    });
	$stateProvider.state("Settings", {
        url: "/Settings",
        controller: "settingsController",
        templateUrl: "web/views/Settings.html"
    });
    // $locationProvider.html5Mode(true);
});
app.run(function($rootScope, $location,editableOptions) {
    $rootScope.location = $location;
        editableOptions.theme = 'bs3';
});
//Alert controller
app.controller('modalInstanceController', function ($scope,$rootScope, $uibModalInstance, modalInfo) {

    $scope.modalData = {};
    $scope.modalData.headerText = modalInfo.modalHeader;
    $scope.modalData.bodyText = modalInfo.modalBody;

    $scope.ok = function () {
        if(modalInfo.data.delete){
            $rootScope.$broadcast("DeleteFacultyConfirm", modalInfo);
        }
        $uibModalInstance.close();
    }
    $scope.cancel = function () {
        $uibModalInstance.dismiss();
    }
});