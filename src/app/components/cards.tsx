"use client"
import { Bookmark, BookmarkCheck, Star } from "lucide-react"
import { useState } from "react";
interface CardProps{
    filme:{ poster:string,
        titulo: string,
        nota:number

    }
  
}

export function Cards({filme}:CardProps){
   const[favorito, setFavorite]= useState(false)
   function favoritar(){
    const favoritos =JSON.parse(localStorage.getItem("favoritos")) || []
    favoritos.push(filme)
    localStorage.setItem("favoritos",JSON.stringify(favoritos))
    setFavorite(!favorito)
   }

    return (
        <div className="flex flex-col gap-2 items-center w-40 m-4 relative">
        {favorito ? 
        <BookmarkCheck onClick={favoritar}  className="absolute right-2 top-2 cursor-pointer text-amber-300"/>:
        <Bookmark onClick={favoritar}color="#faf9f9" className="absolute right-2 top-2 cursor-pointer" />

        }                    
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