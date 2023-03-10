import { useState } from "react";
import Card from "@/components/Card";
import Head from "next/head";
import { Anime, type IAnime } from "@shineiichijo/marika";
import { useMutation } from "@tanstack/react-query";

const Search = ({ }) => {

    const mutation = useMutation(async (q: string) => {
        const animeClient = new Anime();
        const res = await animeClient.searchAnime(q);
        return res.data;
    })

    const [query, setQuery] = useState("");

    return (
        <>
            <Head>
                <title>AniCat | Search</title>
                <meta name="description" content="Search for any anime you can think of." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="space-x-2 flex text-center">
                <input type="text" className="border-2 p-2 border-sky-500 focus:outline-0" onChange={e => {
                    setQuery(e.target.value);
                }} />
                <button className="p-2 rounded-sm bg-sky-300" onClick={() => mutation.mutate(query)}>Search</button>
            </div>
            <div className="space-y-3 my-3">
                {mutation.data && mutation.data.map((anime) => (
                    <Card anime={anime} key={anime.mal_id} />
                ))}

                {mutation.data?.length === 0 && <p className="text-center p-3 rounded-sm bg-red-200 border-x-2 border-red-900 text-red-900">No results found</p>}

                {mutation.isLoading && <p className="text-center p-3 rounded-sm bg-yellow-200 border-x-2 border-yellow-900 text-yellow-900">Loading...</p>}
            </div>
        </>
    );
}

export default Search;