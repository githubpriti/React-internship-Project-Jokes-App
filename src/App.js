import logo from './logo.svg';
import ReactDOM from "react-dom";
import './App.css';
import Body from './components/Body';
import {useEffect, useState} from 'react';

function App() {
  const [joke, setJoke] = useState("");

  const fetchApi = () => {
    // Fetching data from the API
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=religious&type=single")
        .then((res) => res.json())
        .then((data) => setJoke(data.joke));
  };

  return (
    // Return the Body Component with a conditional statement
    <div> {joke === "" ? <Body callApi={fetchApi} /> : <p>{joke}</p>} </div>
  );
}

export default App;
