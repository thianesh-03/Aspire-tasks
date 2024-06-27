import React from 'react'
import './header.css'
import styles from './header.module.css'

export default function Header() {

    // const styler = {
    //     color:"lightblue",
    //     fontSize:50,
    //     fontFamily:"sans-serif",
    //     padding:20
    // }
  return (
    // <div style={styler}>Header</div>
    <h1 className={styles.headText}>Header</h1>
  )
}
