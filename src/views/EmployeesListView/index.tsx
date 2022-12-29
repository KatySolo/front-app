import React from 'react'
import { Grid } from 'semantic-ui-react'
import commonStyles from '../../App.module.css'
import styles from '../DepartmentsListView/DepartmentsListView.module.css'

export const EmployeesListView: React.FC = () => {
  const employees = ['Мария А', 'Николай Б']
  return (
        <div className={commonStyles.container}>
        <div className={commonStyles.title}>Все сотрудники</div>
            <Grid columns={2} className={styles.table}>
                {employees.map((item, index) =>
                    <Grid.Row key={index}>
                        <Grid.Column>{index + 1} {item}</Grid.Column>
                    </Grid.Row>
                )}
            </Grid>
        </div>
  )
}
