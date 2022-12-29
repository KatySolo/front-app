import React from 'react'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'
import { Menu, Segment, Sidebar } from 'semantic-ui-react'
import styles from './App.module.css'
import { AccessFormView } from './views/AccessFormView'
import { Header } from './components/Header'
import { AddEmployeeView } from './views/AddEmployeeView'
import { AddDepartmentView } from './views/AddDepartmentView'

export function classNames (...classNames: Array<string | false | null | undefined>): string {
  return classNames.filter(Boolean).join(' ')
}

const App: React.FC = () => {
  const [visible, setVisible] = React.useState(false)

  return (
        <Router>
            <Sidebar.Pushable as={Segment}>
                <Sidebar
                    as={Menu}
                    animation='overlay'
                    icon='labeled'
                    inverted
                    onHide={() => setVisible(false)}
                    vertical
                    visible={visible}
                    width='thin'
                >
                    <Menu.Item as='div'>
                        <Link to={'/'}>
                            Добавить отметку
                        </Link>
                    </Menu.Item>
                    <Menu.Item as='div'>
                        <Link to={'/add/department'}>
                            Добавить департамент
                        </Link>
                    </Menu.Item>
                    <Menu.Item as='div'>
                        <Link to={'/add/person'}>
                            Добавить сотрудника
                        </Link>
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher dimmed={visible}>
                    <Header onMenuClick={() => setVisible(true)}/>
                    <div className={styles.app}>
                        <Routes>
                            <Route path="/" element={<AccessFormView/>}/>
                            <Route path="/add/person" element={<AddEmployeeView/>}/>
                            <Route path="/add/department" element={<AddDepartmentView/>}/>
                        </Routes>
                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        </Router>
  )
}

export default App
