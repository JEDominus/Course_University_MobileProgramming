const URL = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=/2.0/?method=geo.gettopartists&country=spain&api_key=7cdf4428903c26adfd4bed6993b7010c&format=json&format=json';

function getMusicData() {
    return fetch(`${URL}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    })
    .then(response => response.json())
    .then(data => data.topartists.artist)
    .then(artists => artists.map(artist => {
        return {
            id: artist.mbid,
            name: artist.name,
            image: artist.image[3]['#text']
        }
    }))
}

export {getMusicData}