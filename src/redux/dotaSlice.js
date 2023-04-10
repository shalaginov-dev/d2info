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
    patch: `&patch=7.32`,
    afterDate: `2010-01-01`,
    beforeDate: `2010-01-01`,
    loading: STATUS.IDLE,
    responseData: {},
    searchValue: ''
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
        setPatch: (state, action) => {
            state.patch = action.payload
        },
        setAfterDate: (state, action) => {
            state.afterDate = action.payload
        },
        setBeforeDate: (state, action) => {
            state.beforeDate = action.payload
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayerStat.pending, (state) => {
                state.responseData = {}
                state.loading = STATUS.PENDING
            })
            .addCase(fetchPlayerStat.fulfilled, (state, action) => {
                if (action.payload) {
                    state.responseData = action.payload
                    state.loading = STATUS.SUCCESS
                } else {
                    state.loading = STATUS.FAILED
                }
            })
            .addCase(fetchPlayerStat.rejected, (state) => {
                state.loading = STATUS.FAILED
            })
    }
})

export const {setTeamPlayer, setHero, setPatch, setAfterDate, setBeforeDate, setSearchValue} = dotaSlice.actions

export default dotaSlice.reducer