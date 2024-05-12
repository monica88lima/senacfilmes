import { Clapperboard } from "lucide-react";
import Link from "next/link";

export function NavBar(){
    return ( <nav className="flex justify-between bg-slate-800 w-full p-4"> 
    <div className= "flex gap-2 items-center">
      <Clapperboard className= "text-amber-400" size={28}  />
      <Link href="/"> <h1 className="text-amber-400 text-2xl font-bold uppercase"> Senac Filmes</h1> </Link>
    </div>
    <Link className= "text-gray-400 hover:text-orange-100"href="/sobre"> Sobre </Link>
    </nav>);
}