import { IAnime } from "@shineiichijo/marika";
import Image from "next/image";

const Card = ({anime}: {anime: IAnime}) => {
    return (
        <>
            {anime?.score && anime?.year && anime?.type && <div className="flex align-top w-full p-3 rounded-md space-x-4 bg-slate-300 text-slate-700">
                <a href={anime?.url}>
                    <Image src={anime?.images.webp.image_url} alt={anime?.title_english ? anime?.title_english : anime?.title_japanese} width={100} height={150} />
                </a>
                <div>
                    <a href={anime?.url}>
                        <h1 className="text-lg font-medium">{anime?.title_english ? anime?.title_english : anime?.title_japanese}</h1>
                    </a>
                    {anime?.score && <p className="text-sm">Score: {anime?.score}</p>}
                    {anime?.year && <p className="text-sm">Year: {anime?.year}</p>}
                    {anime?.type && <p className="text-sm">Type: {anime?.type}</p>}
                </div>
            </div>}
        </>
    );
}

export default Card;