import { Clapperboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TitleArticle } from "../components/titleArticle";
import { CardArticles } from "../components/cardArticle";


export default function Home() {
    const artigo = [{
    poster: "https://static.vecteezy.com/ti/fotos-gratis/p1/32746062-uma-saboroso-rosquinha-em-branco-fundo-generativo-ai-foto.jpg",
    tituloArtigo: "New seafood recipe perfect for losing weigth",
    descricao: "Mass communicator has led to modem marketing strategies to continue focusinf on brand awareness",
    linkArtigo: "/sobre"
  },
  {
    poster: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/10/Hamburguer.jpg",
    tituloArtigo: "New seafood recipe perfect for losing weigth",
    descricao: "Mass communicator has led to modem marketing strategies to continue focusinf on brand awareness",
    linkArtigo: "/sobre"
  },
  {
    poster: "https://jpimg.com.br/uploads/2023/12/5-pratos-veganos-para-a-ceia-de-natal.jpg",
    tituloArtigo: "New seafood recipe perfect for losing weigth",
    descricao: "Mass communicator has led to modem marketing strategies to continue focusinf on brand awareness",
    linkArtigo: "/sobre"
  }
]
 
  const titlearticle = {
    tema: "Article and useful tips",
    descricao: "Impedit rerum, aliquid illum magni veritatis voluptatum reprehenderit est odit, vero tempore saepe excepturi, modi necessitatibus quibusdam cum commodi quia itaque natus"
  }

  return (
    <main className="flex min-h-screen flex-col ">
        <div className="bg-white">
        <TitleArticle tema={titlearticle}></TitleArticle>
        <div className="flex justify-center flex-wrap gap-4 m-4">
          <CardArticles artigo={artigo[0]}></CardArticles>
          <CardArticles artigo={artigo[1]}></CardArticles>
          <CardArticles artigo={artigo[2]}></CardArticles>
        </div>
      </div>
     </main>
  );
}
