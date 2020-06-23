

import axios from 'axios'

export const baseUrl = 'https://api.rawg.io/api/games'
export const Game = `${baseUrl}gameSearch.json`
export const gameName = `${baseUrl}games/;`


export const getGameId = async () => {
    const result = await axios.get(Game).then((data => data))

    return result
}