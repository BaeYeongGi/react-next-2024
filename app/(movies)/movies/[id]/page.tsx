import { Suspense } from "react";
import { API_URL } from "../../../constant";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";
import MovieCredits from "../../../../components/movie-credits";

async function getMovie(id:string){
  await new Promise((resolve) => setTimeout(resolve, 5000))
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

interface IParams {
  params : { id: string}
}

export async function generateMetadata({params:{id}}: IParams){
  const movie = await getMovie(id);
  return {
    title: movie.title,
  }
}


export default async function MovieDetail({
  params:{id}}: IParams){


  return (
    <>
    <Suspense fallback={<h1>Loading movie info...</h1>}>
      <MovieInfo id={id}/>
    </Suspense>
    <Suspense fallback={<h1>Loading...</h1>}>
      <MovieCredits id={id} />
    </Suspense>
    <Suspense fallback={<h1>Loading movie videos...</h1>}>
      <MovieVideos id={id}/>
    </Suspense>

    {/* <h1>{movie.title}</h1> */}
    </>
  )
}