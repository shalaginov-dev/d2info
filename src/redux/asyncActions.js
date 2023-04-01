import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchPlayerStat = createAsyncThunk(
    'pizza/fetchPizzas',
    async ({playerId, heroId, patch}) => {
        return await fetch(`https://www.datdota.com/api/players/performances?players=${playerId}&heroes=${heroId}&patch=${patch}&after=01%2F01%2F2010&before=24%2F03%2F2023&duration=0%3B200&duration-value-from=0&duration-value-to=200&tier=1&tier=2&valve-event=does-not-matter&threshold=1`)
            .then(res=> res.json())
            .then(data => console.log(data.data[0]))
    }
)
