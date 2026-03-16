import { configureStore, Reducer, UnknownAction } from '@reduxjs/toolkit'

function reducer(state: [], action: UnknownAction) {
  switch (action.type) {
    case 'add_item':
      return [...state, action.item]

    case 'remove_item':
      return action

    default:
      return state
  }
}

const cart: Reducer = reducer

export const store = configureStore({
  reducer: cart,
  preloadedState: []
})
