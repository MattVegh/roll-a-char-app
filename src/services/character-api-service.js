import config from '../config'

const CharacterApiService = {
    getCharacters() {
        return fetch(`${config.API_ENDPOINT}/characters`)
        .then(res => {
            (!res.ok)
            ? res.json().then(e => Promise.reject(e))
            : res.json()
        })
    },

    postCharacter() {
        
    }
}

export default CharacterApiService