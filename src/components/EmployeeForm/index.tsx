import { Form } from 'semantic-ui-react'
import React from 'react'
import styles from './EmployeeForm.module.css'

export const EmployeeForm: React.FC = () => {
  return (
        <Form className={styles.form} size={'huge'}>
            <div className={styles.field}>
                <Form.Input label={'Введите имя'} width={7}/>
            </div>
            <Form.Button size={'big'} className={styles.button}>Отправить</Form.Button>
        </Form>
  )
}
