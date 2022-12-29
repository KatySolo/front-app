import React from 'react'
import { Grid } from 'semantic-ui-react'
import commonStyles from '../../App.module.css'
import styles from './DepartmentsListView.module.css'

export const DepartmentsListView: React.FC = () => {
  const departments = ['Кинотеатр', 'Ресторан']
  return (
      <div className={commonStyles.container}>
          <div className={commonStyles.title}>Все подразделения</div>
          <Grid columns={2} className={styles.table}>
              {departments.map((item, index) =>
                  <Grid.Row key={index}>
                      <Grid.Column>{index + 1} {item}</Grid.Column>
                  </Grid.Row>
              )}
          </Grid>
      </div>
  )
}
