import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import styles from './App.module.css'
import { AccessFormView } from './views/AccessFormView'

const App: React.FC = () => {
  return (
        <Router>
            <div className={styles.app}>
                <Routes>
                    <Route path="/" element={<AccessFormView/>}/>
                </Routes>
            </div>
        </Router>
  );
}

export default App
