import { Clapperboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavBar } from "./components/navbar";
import { Title } from "./components/title";
import { Cards } from "./components/cards";

import { TitleArticle } from "./components/titleArticle";

export default function Home() {
  const filmes = [{
    poster: "https://media.themoviedb.org/t/p/w300_and_h450_bestv2/dzDK2TMXsxrolGVdZwNGcOlZqrF.jpg",
    titulo: "Planeta dos Macacos: O Reinado ",
    nota: 7.5
  },
  {
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rC5RqXtFoTkBhNWE1dczwi4dZrX.jpg",
    titulo: "Garfield - Fora de Casa ",
    nota: 6.5
  },
  {
    poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/fWSGD2yrzz6hscocnMD8AEXIThk.jpg",
    titulo:"Godzilla e Kong - O novo Império",
    nota: 7.2
  },
  {
    poster: "https://media.themoviedb.org/t/p/w220_and_h330_face/aNK6MA5EApIo0UJE7ZWSYcZBJKy.jpg",
    titulo:"Kung Fu Panda 4",
    nota: 7.1
  }
]
  


  return (
    <main className="flex min-h-screen flex-col ">
      <NavBar />
      <Title>Filmes em Alta</Title>
      <section className="flex flex-wrap gap-4 m-4">
        {filmes.map(filme => <Cards filme={filme}/>)}
        
      </section>

      <Title>Séries em Alta</Title>
      <Title>Minha Lista</Title>
      


   

    </main>
  );
}
