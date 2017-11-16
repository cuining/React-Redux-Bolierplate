import { TICK, ADD } from 'constants/actionTypes'

export const addCount = () => ({ type: ADD })

export const setClock = (light, ts) => ({ type: TICK, light, ts })

export const startClock = () => dispatch => setInterval(() => dispatch(setClock(true, Date.now())), 1000)
