import {createAsyncThunk} from "@reduxjs/toolkit";
import {setUrl} from "./dotaSlice";

export const fetchPlayerStat = createAsyncThunk(
    'pizza/fetchPizzas',
    async ({playerId, heroId, patch, afterDate, beforeDate}, {rejectWithValue,dispatch}) => {
        try {
            const url = `https://www.datdota.com/api/players/performances?players=${playerId}&heroes=${heroId}${patch}&after=${afterDate}&before=${beforeDate}&duration=0%3B200&duration-value-from=0&duration-value-to=200&tier=1&tier=2&valve-event=does-not-matter&threshold=1`
            dispatch(setUrl(url))
            return await fetch(url)
                .then(res => res.json())
                .then(data => data.data[0])
        } catch(error) {
            rejectWithValue(error)
        }


    }
)
