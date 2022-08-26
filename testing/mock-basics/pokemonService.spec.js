const axios = require("axios");
const sinon = require("sinon");
const { getPokemonNames, service } = require("./pokemonService");

describe("pokemonService", () => {
    describe("getPokemonNames", () => {
        let mockData = {
            results: [
                { name: "Laura" },
                { name: "David" },
                { name: "Dianita" },
            ],
        };
        it("should return a list of pokemon names", () => {
            jest.spyOn(service, "fetchPokemons").mockImplementation(() =>
                Promise.resolve(mockData)
            );
            return getPokemonNames().then((names) => {
                expect(names.length).toEqual(3);
                expect(names[0]).toEqual("Laura");
                expect(names[1]).toEqual("David");
                expect(names[2]).toEqual("Dianita");
            });
        });

        it("should return a list of pokemon names with sinon", () => {
            sinon
                .stub(service, "fetchPokemons")
                .callsFake(() => Promise.resolve(mockData));
            return getPokemonNames().then((names) => {
                console.log(names);
                expect(names.length).toEqual(3);
                expect(names[0]).toEqual("Laura");
                expect(names[1]).toEqual("David");
                expect(names[2]).toEqual("Dianita");
            });
        });
    });

    describe("service", () => {
        describe("fetchPokemons", () => {
            let mockData = {
                data: { results: [{ name: "Laura" }], count: 1 },
            };
            beforeEach(() => {
                jest.spyOn(axios, "get").mockImplementation(() =>
                    Promise.resolve(mockData)
                );
            });
            it("should fetch pokemons from the api", () => {
                return service.fetchPokemons().then((result) => {
                    expect(result).toEqual(
                        expect.objectContaining({
                            results: expect.arrayContaining([
                                {
                                    name: expect.any(String),
                                },
                            ]),
                        })
                    );
                });
            });
        });
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });
});
