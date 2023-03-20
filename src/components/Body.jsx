import React from "react";

const Body = (props) => {
  return (
    <div class="container">
        <h3>Random Jokes Generator</h3>
        <div id="joke" class="joke"></div>
        <button onClick={props.callApi} id="jokeBtn" class="btn">Get Another Joke</button>
    </div>
  )
}

export default Body;