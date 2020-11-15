open Utils;

type displayTemp =
    | Celcius
    | Fahrenheit;

[@react.component]
let make = (~data: Api.weatherData) => {
    // let imgSrc = src => requireImage("./assets/icons/" ++ src ++ ".png");
    let (temp, setTemp) = React.useState(() => Celcius);

    let onClick = _ =>
        switch temp {
        | Celcius => setTemp(_ => Fahrenheit)
        | Fahrenheit => setTemp(_ => Celcius)
        };

    <div className="weather-card">
        // <img src={data.icon |> imgSrc} alt={data.description} />
        <p>{s(data.location)}</p>
        <p>{s(data.description)}</p>
        <p onClick>
            {(
                switch temp {
                | Celcius => kToC(data.temp)
                | Fahrenheit => kToF(data.temp)
                }
            ) |> Js.Float.toString |> s
            }
        </p>
    </div>
}