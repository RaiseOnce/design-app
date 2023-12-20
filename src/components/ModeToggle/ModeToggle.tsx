'use client'

import React, { useContext } from 'react'
import styles from './ModeToggle.module.scss'
import { ThemeContext } from '@/context/ThemeContext'

const ModeToggle = () => {
  const { state, dispatch } = useContext(ThemeContext)

  return (
    <div
      className={styles.container}
      onClick={() => dispatch({ type: 'CHANGE_THEME' })}
    >
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={state.mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}

export default ModeToggle
