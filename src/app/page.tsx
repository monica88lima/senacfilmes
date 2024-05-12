import { Clapperboard } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <nav className="flex justify-between bg-slate-800 w-full p-4"> 
      <div className= "flex gap-2 items-center">
      <Clapperboard className= "text-amber-400" size={28}  />
      <h1 className="text-amber-400 text-2xl font-bold uppercase"> Senac Filmes</h1>
      </div>
      
      <a className= "text-gray-400 hover:text-orange-100" href="/sobre"  >Sobre</a>
      </nav>
      </main>
  );
}
