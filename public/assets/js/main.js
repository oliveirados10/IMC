const app = angular.module('imc-page', []);

app.controller('ImcApp', function ($scope, $http) {
    $scope.ImcName = "";
    $scope.ImcPeso = "";
    $scope.ImcAltura = "";
    $scope.data = [];

    $scope.calculateIMC = function (p, a) {
        if (p && a) {
            const peso = parseFloat(p);
            const altura = parseFloat(a);
            const imc = peso / (altura * altura);
            return imc;
        } else {
            return "Preencha o peso e a altura";
        }
    };

    $scope.submit = () => {
        const imcResult = $scope.calculateIMC($scope.ImcPeso, $scope.ImcAltura);

        if (typeof imcResult === 'number') {
            $http.post("http://localhost:3333/api/imc", {
                    name: $scope.ImcName,
                    value: imcResult
                })
                .then((res) => {
                    console.log(res)
                    $scope.ImcName = "";
                    $scope.ImcPeso = "";
                    $scope.ImcAltura = "";
                    $scope.getAllimc()
                })
                .catch((error) => {
                    console.error("Error:", error);
                    alert("An error occurred. Please try again later.");
                });
        } else {
            alert(imcResult);
        }
    };

    $scope.getAllimc = () => {
        $http.get("http://localhost:3333/api/imc", {})
            .then((res) => {
                console.log(res)
                $scope.data = res.data;
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("An error occurred. Please try again later.");
            });
    }

    $scope.imcDelete = (id)  => {
        $http.delete(`http://localhost:3333/api/imc/${id}`)
            .then((res) => {
                console.log("Item excluído com sucesso:", res);
                $scope.getAllimc(); 
            })
            .catch((error) => {
                console.error("Erro ao excluir item:", error);
                alert("Erro ao excluir o item. Por favor, tente novamente mais tarde.");
            });
    };

    $scope.getAllimc();
});
