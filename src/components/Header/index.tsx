import React from 'react'
import { Button } from 'semantic-ui-react'
import styles from './Header.module.css'

export const Header: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  return (
        <div className={styles.header}>
            <Button onClick={onMenuClick} size={'huge'}>Меню</Button>
        </div>
  )
}
