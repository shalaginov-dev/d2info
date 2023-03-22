import {createSlice} from '@reduxjs/toolkit'
import  {teams} from '../assets/teams'

const initialState = {
    items: teams,
    team: '',
    player: '',
    hero: '',
    request: ''
}

export const dotaSlice = createSlice({
    name: 'dota',
    initialState,
    reducers: {
        setTeamPlayer: (state, action) => {
            state.team = action.payload.title
            state.player = action.payload.name
        },
        setHero: (state, action) => {
            console.log(action.payload.name)
            state.hero = action.payload.name
        },
    },
})

export const {setTeamPlayer, setHero} = dotaSlice.actions

export default dotaSlice.reducer