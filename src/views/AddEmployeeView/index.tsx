import React from 'react'
import { Form } from 'semantic-ui-react'
import styles from '../AccessFormView/AccessFormView.module.css'
import commonStyles from '../../App.module.css'

export const AddEmployeeView: React.FC = () => {
  return (
      <div className={commonStyles.container}>
            <div className={commonStyles.title}>Добавление сотрудника</div>
          <Form className={styles.form} size={'huge'}>
              <div className={styles.field}>
                  <Form.Input label={'Введите имя'} width={7}/>
              </div>
              <Form.Button size={'big'} className={styles.button}>Отправить</Form.Button>
          </Form>
        </div>
  )
}
