import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import styles from './App.module.css'
import { AccessFormView } from './views/AccessFormView'
import { Header } from './components/Header'
import { AddEmployeeView } from './views/AddEmployeeView'

export function classNames (...classNames: Array<string | false | null | undefined>): string {
  return classNames.filter(Boolean).join(' ')
}

const App: React.FC = () => {
  return (
        <Router>
            <Header />
            <div className={styles.app}>
                <Routes>
                    <Route path="/" element={<AccessFormView/>}/>
                    <Route path="/addPerson" element={<AddEmployeeView />}/>
                </Routes>
            </div>
        </Router>
  )
}

export default App
