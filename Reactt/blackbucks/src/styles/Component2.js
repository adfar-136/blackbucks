import React from 'react'
import styles from "./Component2.module.css"
export default function Component2() {
  return (
    <div className={styles['container-div']}>
        <h1 className={styles.heading1}>React</h1>
        <h3 className={styles.heading3}>Javascript</h3>
    </div>
  )
}
