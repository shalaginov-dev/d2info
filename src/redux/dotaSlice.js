import {createSlice} from '@reduxjs/toolkit'
import {teams} from '../assets/teams'
import {fetchPlayerStat} from "./asyncActions";

export const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    SUCCESS: 'success',
    FAILED: 'failed',
}

const initialState = {
    items: teams,
    player: {id: '', nickname: ''},
    hero: {id: '', name: ''},
    patch: '7.32',
    loading: STATUS.IDLE,
    responseData: {},
}

export const dotaSlice = createSlice({
    name: 'dota',
    initialState,
    reducers: {
        setTeamPlayer: (state, action) => {
            state.player = action.payload
        },
        setHero: (state, action) => {
            state.hero = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayerStat.pending, (state) => {
                state.loading = STATUS.PENDING
            })
            .addCase(fetchPlayerStat.fulfilled, (state, action) => {
                state.responseData = action.payload
                state.loading = STATUS.SUCCESS
            })
            .addCase(fetchPlayerStat.rejected, (state) => {
                state.loading = STATUS.FAILED
                state.items = []
            })
    }
})

export const {setTeamPlayer, setHero} = dotaSlice.actions

export default dotaSlice.reducer