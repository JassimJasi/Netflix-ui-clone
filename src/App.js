import React from "react";
import './App.css'
import Banner from "./Componets/Banner/Banner";
import NavBar from "./Componets/NavBar/NavBar";
import RowPost from "./Componets/RowPost/RowPost";
import { originals, trending, comedyMovies, action, horrorMovies, romanceMovies, documentaries } from "./urls"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title='Netflix Originals' />
      <RowPost url={trending} title='Tranding' isSmall />
      <RowPost url={comedyMovies} title='Comdey' isSmall />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={horrorMovies} title='Horror' isSmall />
      <RowPost url={romanceMovies} title='Romance' isSmall />
      <RowPost url={documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
