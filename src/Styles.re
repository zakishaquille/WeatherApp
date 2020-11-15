let reasonReactBlue = "#48a9dc";

// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = {j|
  * {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
  }
  .container {
    margin: auto;
    margin-top: 1rem;
    width: 60%;
    text-align: center;
  }
  .containerTitle {
    background-color: rgb(242, 243, 245);
    border-radius: 8px 8px 0px 0px;
    padding: 12px;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  .city-form input {
    display: block;
    border: 1px solid #6272a4;
    width: 100%;
    font-size: 1rem;
    padding: 0.5rem 0;
    margin-bottom: 0.2rem;
  }
  .city-form button {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: #6272a4;
    color: white;
    border: none;
    border-radius: 4px;
  }
  .weather-card {
    border-radius: 4px;
    border: 1px solid #6272a4;
    margin-top: 1rem;
    padding: 0.5rem;
    font-size: 2rem;
  }
|j};
