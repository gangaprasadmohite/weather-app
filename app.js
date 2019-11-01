window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/2d8495f9b68e382a07f80650dfddeb8d/${lat},${long}`;
            fetch(api)
            .then(response => {
                return response.json();
            })
            .then (data => {
                console.log(data);
                const{temperature, summary} = data.currently;
            })
        });
        
    }
})