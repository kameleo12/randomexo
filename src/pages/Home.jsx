import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1,title: "os", release_date: "2019"},
        {id: 2,title: "ss", release_date: "2019"},
        {id: 3,title: "ds", release_date: "2019"},
        {id: 4,title: "odds", release_date: "2019"},
    ]
    const handleSearch = (e) => {
        e.preventDefault()

    }

    return <div className="Home">
        <form action="" onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..."  className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie => <MovieCard movie={movie} key={movie.id}/>))}
        </div>
    </div>
}

export default Home;