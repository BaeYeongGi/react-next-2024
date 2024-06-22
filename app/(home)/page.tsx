import Link from "next/link";

export const metadat = {
  title: "Home",
}

export const API_URL = 'https://nomad-movies.nomadcoders.workers.dev/movies';

async function getMovies(){
  // fetch(URL).then(response => response.json());
  await new Promise((resolve) => setTimeout(resolve, 1000))
  console.log('im fetching')
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage(){
  const movies = await getMovies();
  return (
    <>
    <ul>
      {movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
    </ul>
    </>
  )
}

/*

※ Next JS를 사용하지 않고 기존 방식에서 DATA FETCHING을 하는 방법

'use client';

import { useState, useEffect } from 'react'; 

export default function Page(){
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    const json = await response.json();
    setMovies(json);
    setIsLoading(false);
  }
  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      {isLoading ? "Loading..." : JSON.stringify(movies)}
    </>
  )
}
*/