interface TitleArticleProps{
    tema:{tema:string, descricao:string } 
}
export function TitleArticle({tema}: TitleArticleProps){
    return (
        <div className="flex text-center justify-center flex-col items-center m-2 p-4 bg-white opacity-80">
                <h1 className="font-extrabold text-2xl w-auto">{tema.tema}</h1>
                <small className="p-4" >{tema.descricao}</small>
        </div>
    );
}