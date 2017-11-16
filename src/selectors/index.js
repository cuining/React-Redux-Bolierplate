import { createSelector } from 'reselect'

export const selectState = state => state.count

export const selectCount = createSelector(
  selectState,
  count => count.get('count')
)

export const selectLight = createSelector(
  selectState,
  count => count.get('light')
)

export const selectLastUpdate = createSelector(
  selectState,
  count => count.get('lastUpdate')
)
