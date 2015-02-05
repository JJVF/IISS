//Funciones de AngularJS

angular.module('miaplicacion', ['ngResource'])

/*Utilizacion de MongoLab*/
.factory('Profesores', function ($resource) {
    var Profesores =
        $resource('https://api.mongolab.com/api/1/databases/iiss/collections/profesores/', {
            apiKey: '8uFY9cCZSd3jDGNVD0iKQeWZOPVWIBiy', //Key de Mongolab
            id: 'MartaJC'                               //User de Mongobal
        });
    
    return Profesores;
})

.factory('Img', function ($resource) {
    var Img =
        $resource('https://api.mongolab.com/api/1/databases/iiss/collections/imagenes/', {
            apiKey: '8uFY9cCZSd3jDGNVD0iKQeWZOPVWIBiy', //Key de Mongolab
            id: 'MartaJC'                               //User de Mongobal
        });
    
    return Img;
})

//Controlador que carga la informacion de la coleccion Img de la BD en la variable img
.controller('CargarFiestas', function ($scope, Img) {
    $scope.img = Img.query({}, function (img) {
        console.log($scope.img.length);
    });
})

//Controlador con funciones para el manejo de la coleccion Profesores de la BD, es utilizado sobre todo para añadir nueva informacion
.controller('ExampleController', function ($scope, Profesores) {
    $scope.master = {};

    $scope.profesores = Profesores.query({}, function (profesores) {
        console.log($scope.profesores.length);
    });

    $scope.update = function (user) {
        $scope.master = angular.copy(user);
    };

    $scope.reset = function () {
        $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
    
    $scope.add = function (user) {
        var profesor = new Profesores({
            name: ""+user.name+" "+user.apellido+"",
            email: ""+user.email+""
        });
        profesor.$save();
    };
})

//Controlador que recoge la informacion del archivo JSON imagenes y se los da a la variable data
.controller('CargarDiscotecas_JSON', ['$scope','$http', function($scope, $http){    
	$http.get('JSON/Discoteca/imagenes.json').success (function(data){
		$scope.data = data;
	});
}])

//Controlador que recoge la informacion del JSON objetos creado en el codigo y se los da a la variable data
.controller('CargarActuaciones_JSON', ['$scope','$http', function($scope, $http){    
	
	//Creacion de un JSON mediante codigo
	var objetos = {"imagenes":[ 
        {"Imagenes" :"img/portfolio/carnaval.jpg", "Modal" : "#portfolioModal7"},
        {"Imagenes" :"img/portfolio/barrio.jpg", "Modal" : "#portfolioModal8"},
        {"Imagenes" :"img/portfolio/jerez.jpg", "Modal" : "#portfolioModal9"}
    ]};
        
    $scope.data = objetos.imagenes;
}]);