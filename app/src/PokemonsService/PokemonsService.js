angular
    .module('PokemonApp')
    .factory('PokemonsService', function($http) {

            $http.defaults.headers.common['application-id'] = "580AA863-920E-D324-FF19-39782704AE00";
            $http.defaults.headers.common['secret-key'] = "8625896F-BE3F-47FB-FF11-EF93CFFF8B00";

            return {

                getPokemons: function() {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/?limit=10', {
                        headers: {
                            'application-id': undefined,
                            'secret-key': undefined
                        }
                    });
                },

                getPokemon: function(pokemonId) {
                    return $http.get('http://pokeapi.co/api/v2/pokemon/' + pokemonId, {
                        headers: {
                            'application-id': undefined,
                            'secret-key': undefined
                        }
                    });
                },

                createPokemon: function(pokemonData) {
                    return $http({
                        method: 'POST',
                        url: 'https://api.backendless.com/v1/data/pokemon',
                        data: pokemonData
                    });
                },

                editPokemon: function(pokemonId, pokemonData) {
                    return $http({
                        method: 'PUT',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                        data: pokemonData
                    });
                },

                deletePokemon: function(pokemonId) {
                    return $http({
                        method: 'DELETE',
                        url: 'https://api.backendless.com/v1/data/pokemon/' + pokemonId,
                    });
                }

            }

        }

    );
