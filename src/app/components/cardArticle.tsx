import { MoveRight } from "lucide-react";
interface CardArticlesProps{
    artigo:{poster:string, tituloArtigo: string,descricao:string,linkArtigo:string}  
}
export function CardArticles({artigo}:CardArticlesProps) {
    return (
        <div className="flex flex-col  gap-3 w-40 m-4 bg-white">
            <img className="rounded-lg object-cover w-48 h-24" src={artigo.poster} alt="imagem do artigo" />
            <h1 className="font-bold line-clamp-2">{artigo.tituloArtigo}</h1>
            <small className="opacity-50">{artigo.descricao}</small>
            <div className="flex items-center gap-2 font-semibold text-xs ">
                <a className= "line-clamp-3 text-left text-zinc-600 hover:text-neutral-400  "href= {artigo.linkArtigo}>Read more</a>
                <MoveRight size={16} color="rgb(115 115 115)" />
            </div>
        </div>
    );
}