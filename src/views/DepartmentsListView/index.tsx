import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Screen } from '../../components/Screen'
import styles from './DepartmentsListView.module.css'

export const DepartmentsListView: React.FC = () => {
  const departments = ['Кинотеатр', 'Ресторан']
  return (
      <Screen title={'Все подразделения'}>
          <Grid columns={2} className={styles.table}>
              {departments.map((item, index) =>
                  <Grid.Row key={index}>
                      <Grid.Column>{index + 1} {item}</Grid.Column>
                  </Grid.Row>
              )}
          </Grid>
      </Screen>
  )
}
