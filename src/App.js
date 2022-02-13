import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/Movies";
import Genres from "./pages/Genres/Genres";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import FilmByGenre from "./components/FilmByGenre/FilmByGenre";

function App() {


  return (
    <div className="App">
        <div className="App_body">

            <div>
                <Routes>
                    <Route path={'/'} element={<Header/>}>
                        <Route path={'/movies'} element={<Movies/>}/>
                        <Route path={'/genres'} element={<Genres/>}>
                            <Route path={'film'} elemenet={<FilmByGenre/>}/>
                        </Route>
                        <Route path={`/movieInfo/`} element={<MovieInfo/>}></Route>
                    </Route>
                </Routes>
            </div>

        </div>
    </div>
  );
}

export default App;
