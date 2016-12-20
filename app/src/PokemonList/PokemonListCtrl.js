'use strict';

pokemonApp.controller('PokemonListCtrl', function($scope, PokemonsService, BerriesService, $q) {

    $scope.pokemonListLoaded = false;

    var pokemonRequest = PokemonsService.getPokemons();
    var berriesRequest = BerriesService.getBerries();

    $q.all([pokemonRequest, berriesRequest])
        .then(function(response){
            $scope.pokemons = response[0].data.results;
            $scope.berries = response[1].data.results;
            $scope.pokemonListLoaded = true;
        }, function(error){
            console.log(error);
        });
});
