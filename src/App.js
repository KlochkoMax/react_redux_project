import './App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Movies from "./pages/Movies/Movies";
import Genres from "./pages/Genres/Genres";
import Movie from "./components/Movie/Movie";

function App() {


  return (
    <div className="App">
        <div className="App_body">

            <div>
                <Routes>
                    <Route path={'/'} element={<Header/>}>
                        <Route path={'/movies'} element={<Movies/>}></Route>
                        <Route path={'/genres'} element={<Genres/>}></Route>
                    </Route>
                </Routes>
            </div>

        </div>
    </div>
  );
}

export default App;
