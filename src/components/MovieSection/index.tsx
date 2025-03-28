import { FaSearch } from "react-icons/fa"
import Button from "../Button"
import FieldSet from "../FieldSet"
import InputText from "../InputText"
import styles from "./MovieSection.module.css"
import MovieList from "../MovieList"
import { Movie } from "../../Types"
import { useEffect, useState } from "react"
import { getMovies } from "../../api"

const MovieSection = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    const fetchMovies = async () => {
        try {
            const movies = await getMovies();
            setMovies(movies);
        }
        catch (err) {
            console.error("Erro ao buscar filmes" + err);
        }
    }

    useEffect(() => {
        fetchMovies();
    });
    
    return (
        <main>
            <section className={styles.container}>
                <FieldSet variant="secondary">
                    <InputText placeholder="Buscar filmes..." />
                    <Button variant="icon">
                        <FaSearch />
                    </Button>
                </FieldSet>
                <h1 className={styles.titulo}>Em cartaz</h1>
                <MovieList movies={movies} />
            </section>
        </main>
    )
}

export default MovieSection
