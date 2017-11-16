import { ADD, TICK } from 'constants/actionTypes'
import { Map } from 'immutable'

export const initialState = Map({
  lastUpdate: 0,
  light: false,
  count: 0
})

export default (state = initialState, action) => {
  const { type, ts } = action

  switch (type) {
    case TICK: {
      return state.merge({ lastUpdate: ts, light: !state.get('light') })
    }

    case ADD: {
      return state.update('count', count => count + 1)
    }

    default: {
      return state
    }
  }
}
