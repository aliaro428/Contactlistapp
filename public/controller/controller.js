var myApp = angular.module('myApp', []);

myApp.controller('GreetingController', ['$scope', '$http', function ($scope, $http) {
    // $http.get('/contactList').success(function(response){
    //     console.log("i get the data i received");
    //     $scope.contactList = response;
    // });
    // GET data from Server
    $http({
        method: 'GET',
        url: "/contactList"
    }).then(function (success) {
        console.log("data comes from server")
        $scope.contactList = success.data;
        console.log($scope.contactList)
    }, function (error) {
        console.log(error + "data not loaded")
    })
    // post data to server
    $scope.addcontact = function () {
        console.log($scope.contact);
        //   $http.post('/contactList', $scope.contact).success(function(response){
        //       console.log(response);
        //   })
        $http.post("/contactList", $scope.contact).then(function (data, status) {


            console.log(data);
        })
    };
// remove data
$scope.remove = function (id){
    console.log(id);
    // $http.delete('/contactList/' + id);
    //    $http.delete('/contactList/' + id).then(function (data, status) {


    //         console.log(data);
    //     })
    $http({
        method :'delete',
        url :'/contactList/'+ id
    })
};

        
}]);