var app = angular.module('starter', []);

var initAll = function($scope) {
  $scope.selected = {};
  $scope.predictResult = "No disponible";
  $scope.statusResult = {
    showMsg: "En proceso",
    hideMsg: "Incompleto"
  };
}

app.controller('myCtrl', function($scope) {

  $scope.dataset = dataset;
  $scope.listAttribute = dataset.listAttribute;
  initAll($scope);

  console.log("Esto es Angular");
  console.log(JSON.stringify($scope.dataset));

  $scope.findResult = function() {
    var result = predictResultByTree(classifyTree, $scope.selected)
    console.log(result);
    if (result) {
      $scope.predictResult = result.Value;
      $scope.statusResult = {
        showMsg: "Exitoso",
        hideMsg: "Completado"
      };
    }
    else {
      $scope.predictResult = "Sin resultados";
      $scope.statusResult = {
        showMsg: "Error",
        hideMsg: "Revisa la consulta"
      };
    }
      
  }

  $scope.changeSelectedItem = function(key, value) {
    $scope.selected[key] = value;
    console.log('Item')
    console.log(value)
    console.log($scope.selected);
  }

  $scope.clearAll = function() {
    initAll($scope);
  }

  $scope.myfunction = function (data) {
    console.log('Hola mundo')
    console.log(JSON.stringify(data.listAttribute))
    $scope.dataset = data;
    $scope.listAttribute = data.listAttribute;
    $scope.$apply();
  };
})
