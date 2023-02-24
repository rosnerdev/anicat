import Card from "@/components/Card";
import Head from "next/head";
import { Anime, type IAnime } from "@shineiichijo/marika";

interface topTenProps {
    data: IAnime[];
}

const topTen = ({ data }: topTenProps) => {
    return (
        <>
            <Head>
                <title>AniCat | Top 10</title>
                <meta name="description" content="Top 10 animes in all of MyAnimeList" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="space-y-3 my-3">
                {
                    data.map((anime) => (
                        <Card anime={anime} key={anime.mal_id} />
                    ))
                }
            </div>
        </>
    );
}

export async function getStaticProps() {
    // Fetch anime data using the Marika library (a Jikan API wrapper)
    const animeClient = new Anime();
    const res = await animeClient.getTopAnime();
    // Slice the data to only get the top 10 anime
    const data = await res.data.slice(0, 10);

    return {
        props: {
            data: data
        },
        // Revalidate the data every 24 hours
        revalidate: 86400,
    }
}
export default topTen;