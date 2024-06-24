import { API_URL } from "../app/(home)/page";
import { MovieInfoProps } from "../types/types";

async function getMovie(id:string){
  console.log(`Fetching movies: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch(`${API_URL}/${id}`);
  console.log('response', response)
  return response.json();
}

export default async function MovieInfo({id}:MovieInfoProps){
  const movie = await getMovie(id);
  return (
    <>
      <h6>{JSON.stringify(movie)}</h6>
    </>
  )
}