import React from 'react'
import styles from '../Header.module.css'

const HeaderListItem = ({children}:React.LiHTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={styles.cabecalho}>{children}</li>
  )
}

export default HeaderListItem