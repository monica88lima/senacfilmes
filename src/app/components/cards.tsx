import { Star } from "lucide-react"
interface CardProps{
    filme:{ poster:string,
        titulo: string,
        nota:number

    }
  
}

export function Cards({filme}:CardProps){
    return (
        <div className="flex flex-col gap-2 items-center w-40 m-4">
            <img className="rounded-lg"src={filme.poster} alt="fotoFilme" />
            <span className="text-lg font-medium line-clamp-1">
            {filme.titulo}</span>
            <div className="flex items-center gap-2">
                <Star className="text-amber-400 "/>
                <span className="opacity-80">{filme.nota}</span>
            </div>
            <a className="bg-blue-700 py-1 px-6 rounded text-stone-300 hover:text-yellow-200"href="">detalhes</a>
        </div>

    );
}