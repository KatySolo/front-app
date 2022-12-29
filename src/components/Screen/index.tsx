import React from 'react'
import commonStyles from '../../App.module.css'

export const Screen: React.FC<{ children?: JSX.Element, title: string }> = ({ children, title }) => {
  return (
        <div className={commonStyles.container}>
            <div className={commonStyles.title}>{title}</div>
            {children}
        </div>
  )
}
