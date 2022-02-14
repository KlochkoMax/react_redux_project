import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/Movies";
import Genres from "./pages/Genres/Genres";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import FilmByGenre from "./components/FilmByGenre/FilmByGenre";
import Movie from "./components/Movie/Movie";
import MovieInfoByGenre from "./components/MovieInfoByGenre/MovieInfoByGenre";

function App() {


  return (
    <div className="App">
        <div className="App_body">

            <div>
                <Routes>
                    <Route path={'/'} element={<Header/>}>
                        <Route path={'movies'} element={<Movies/>}/>
                        <Route path={'genres'} element={<Genres/>}>
                            <Route path={'filmByGenre'} element={<FilmByGenre/>}/>
                            <Route path={'filmByGenre/movieInfoByGenre'} element={<MovieInfoByGenre/>}/>
                        </Route>
                        <Route path={`/movieInfo/`} element={<MovieInfo/>}/>
                    </Route>
                </Routes>
            </div>

            <div className="Footer">
                  <spun>Developed by Max Klochko</spun>
            </div>

        </div>
    </div>
  );
}

export default App;
