'use strict';

pokemonApp.controller('EditPokemonCtrl', function($scope, $routeParams, PokemonsService) {

    $scope.pokemonLoaded = false;

    PokemonsService.getPokemon($routeParams['pokemonId']).then(function(response) {
        $scope.pokemonData = {
            name: response.data.name,
            weight: response.data.weight
        };
        $scope.pokemonLoaded = true;
    });

    $scope.editPokemon = function(myPokemon) {

        $scope.editSuccess = false;
        $scope.editError = false;

        PokemonsService.editPokemon($routeParams['pokemonId'], myPokemon).then(function(response) {
            $scope.editSuccess = true;
        }, function(error){
            $scope.editError = true;
        });
    }

});