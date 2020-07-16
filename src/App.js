import React from "react";

import "./App.css";
import Navigation from "./Navigation";
import Banner from "./Banner";
import MovieRow from "./MovieRow";
import Urls from "./urls";

function App() {
console.log(process.env.REACT_APP_BASEURL)
  return <div className="App">
    <Navigation/>
    <Banner/>
    <br/>
    <MovieRow title="NETFLIX ORIGINALS" url={Urls.fetchNetflixOriginals} originals  />
      <MovieRow title="Trending Now" url={Urls.fetchTrending} />
      <MovieRow title="Top Rated" url={Urls.fetchTopRated} />
      <MovieRow title="Action Movies" url={Urls.fetchActionMovies} />
      <MovieRow title="Comedy Movies" url={Urls.fetchComedyMovies} />
      <MovieRow title="Horror Movies" url={Urls.fetchHorrorMovies} />
      <MovieRow title="Romance Movies" url={Urls.fetchRomanceMovies} />
      <MovieRow title="Documentaries" url={Urls.fetchDocumentariesMovies}/>


  </div>;
}

export default App;
