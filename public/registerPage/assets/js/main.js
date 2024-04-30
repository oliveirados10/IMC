const app = angular.module('register-page', []);

app.controller('registerController', function ($scope, $http) {
    $scope.firstname = "";
    $scope.lastname = "";
    $scope.email = "";
    $scope.password = "";

    $scope.submit = () => {
        $http.post("http://localhost:3333/api/register", {
            firstname: $scope.firstname,
            lastname: $scope.lastname,
            password: $scope.password,
            email: $scope.email,
        })
            .then((res) => {
                console.log(res.data);

            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred. Please try again later.");
            });
    };
});