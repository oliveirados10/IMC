const app = angular.module('ecommerce-page', []);

app.controller('Ecommerce', function ($scope, $http) {
    $scope.EcommcerceProduto = "";
    $scope.EcommcercePreco = "";
    $scope.EcommcerceQuantidade = "";
    $scope.data = [];

    $scope.calculateProdutos = function (p, q) {
        if (p && p) {
            const produto = parseFloat(p);
            const quantidade = parseFloat(q);
            const soma = produto + quantidade ;
            return soma;
        } else {
            return "Escolha um produto válido";
        }
    };

    $scope.submit = () => {
        const ecommerceResult = $scope.calculateProdutos($scope.ecommerceProduto, $scope.ecommerceQuantidade);

        if (typeof ecommerceResult === 'number') {
            $http.post("http://localhost:3333/api/imc", {
                    name: $scope.ImcName,
                    value: ecommerceResult
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
