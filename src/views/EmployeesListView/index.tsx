import React from 'react'
import { Grid } from 'semantic-ui-react'
import styles from '../DepartmentsListView/DepartmentsListView.module.css'
import { Screen } from '../../components/Screen'

export const EmployeesListView: React.FC = () => {
  const employees = ['Мария А', 'Николай Б']
  return (
        <Screen title={'Все сотрудники'}>
            <Grid columns={2} className={styles.table}>
                {employees.map((item, index) =>
                    <Grid.Row key={index}>
                        <Grid.Column>{index + 1} {item}</Grid.Column>
                    </Grid.Row>
                )}
            </Grid>
        </Screen>
  )
}
