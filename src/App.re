open Utils;
open Api;

[@react.component]
let make = () => {
    let (weather, setWeather) = React.useState(() => None);

    let onWeather = w =>
        Js.Promise.(
            w
            |> then_(data => setWeather(_ => Some(data)) |> resolve)
            |> catch(e => {
                Js.log(e);
                setWeather(_ => None) |> resolve;
            })
            |> ignore
        );

    let onCity = city => getWeather(city) |> onWeather;

    React.useEffect0(() => {
        let sendGeo = (lat, lon) => getWeather(Geo(lat, lon)) |> onWeather;
        let sendErr = e => Js.log(e);
        Geo.getGeolocation(~sendGeo, ~sendErr);

        None;
    });

    <div>
        <CityForm onCity />
        {switch (weather) {
            | Some(data) => <Weather data />
            | None => <h1>{s("Loading...")}</h1>
        }}
    </div>;
}