import { API_URL } from "../app/constant";
import styles from "../styles/movie-credits.module.css";

async function getCredits(id:string){
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function MovieCredits({id}: {id:string}){
  const credits = await getCredits(id);
  return (
    <div className={styles.container}>
      {credits.map((credit) => 
        <li key={credit.id}>
          <img src={credit.profile_path} alt={credit.name} />
          <dl>
            <dt>{credit.name}</dt>
            <dd>{credit.character}</dd>
          </dl>
        </li>

      )}
    </div>
  )
}