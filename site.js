(function () {
    var el = document.getElementById("weather");
    if (el) {
        fetch("https://api.open-meteo.com/v1/forecast?latitude=40.7436&longitude=-73.9196&current=temperature_2m,weather_code,precipitation&temperature_unit=fahrenheit")
            .then(function (r) { return r.json(); })
            .then(function (data) {
                var t = Math.round(data.current.temperature_2m);
                var sky = skyFrom(data.current.weather_code);
                var extra = data.current.precipitation > 0 ? " · raining" : "";
                el.textContent = "today in sunnyside — " + t + "°f, " + sky + extra;
            })
            .catch(function () {
                el.textContent = "today in sunnyside — look out a window";
            });
    }

    var spark = document.getElementById("sparkles");
    var note = document.getElementById("spark-note");
    if (spark && note) {
        spark.addEventListener("click", function () {
            note.hidden = !note.hidden;
        });
    }

    function skyFrom(code) {
        if (code === 0) return "clear";
        if (code === 1 || code === 2) return "partly cloudy";
        if (code === 3) return "overcast";
        if (code >= 45 && code < 50) return "fog";
        if (code >= 51 && code < 58) return "drizzle";
        if (code >= 61 && code < 68) return "rain";
        if (code >= 71 && code < 78) return "snow";
        if (code >= 80 && code < 83) return "showers";
        if (code >= 95) return "thunder";
        return "weather";
    }
})();
