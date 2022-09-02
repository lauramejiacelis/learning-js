import axios, { AxiosResponse } from "axios";

type Pokemon = {
  name: string;
  url: string;
};

type PokemonResult = {
  count: number;
  next: string;
  previous: any;
  results: Pokemon[];
};

type Generation = {
  language: {
    name: string;
    url: string;
  };
  name: string;
};

type GenerationResult = {
  names: Generation[];
};

const fetch = <Result>(url: string): Promise<Result> => {
  return axios.get(url).then(({ data }: AxiosResponse) => data);
};

const getPokemons = (): Promise<Pokemon[]> => {
  return fetch<PokemonResult>("https://pokeapi.co/api/v2/pokemon/").then(
    ({ results }) => results
  );
};

const getFirstGen = () => {
  return fetch<GenerationResult>(
    "https://pokeapi.co/api/v2/generation/generation-i"
  ).then((res) => res.names.find(({ language: { name } }) => name === "es"));
};

getFirstGen().then(console.log);
getPokemons().then(console.log);

class User {
  constructor(private name: string) {}

  sayHi(): void {
    console.log(this.name);
  }

  getName(): string {
    return this.name;
  }
}

const lau = new User("Laura");

lau.getName();
