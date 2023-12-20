'use client'

import { createContext, useReducer } from 'react'

type StateType = {
  mode: string
}

type ActionType = {
  type: 'CHANGE_THEME'
}

const INITIAL_STATE = {
  mode: 'dark',
}

export const ThemeContext = createContext<{
  state: StateType
  dispatch: React.Dispatch<ActionType>
}>({
  state: INITIAL_STATE,
  dispatch: () => {},
})

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        mode: state.mode === 'dark' ? 'light' : 'dark',
      }

    default:
      return state
  }
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <div className={`theme ${state.mode}`}>{children}</div>
    </ThemeContext.Provider>
  )
}
