import {configureStore} from '@reduxjs/toolkit'
import dota from './dotaSlice'

export const store = configureStore({
    reducer: {
        dota
    },
})