import { useState } from 'react'
import styles from './App.module.css'
import { Input } from './components/Input'

function App() {

  return (
    <div className={styles.toDoWrapper}>
    <Input />

    </div>
  )
}

export default App
