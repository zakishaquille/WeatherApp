let geo: option('a) = [%bs.raw {|navigator.geolocation|}];

[@bs.val]
external getCurrentPosition:
    (~onSuccess: 'a => unit, ~onError: 'b => unit) => unit =
    "navigator.geolocation.getCurrentPosition";

let getGeolocation = (~sendGeo, ~sendErr) => {
    let onSuccess = p => sendGeo(p##coords##latitude, p##coords##longitude);
    let onError = e => sendErr(e);

    switch geo {
        | Some(_) => getCurrentPosition(~onSuccess, ~onError)
        | None => Js.log("None available")
    };
}