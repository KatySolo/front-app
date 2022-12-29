import React from 'react'
import { Form } from 'semantic-ui-react'
import styles from './DepartmentForm.module.css'

export const DepartmentForm: React.FC = () => {
  return (
        <Form className={styles.form} size={'huge'}>
            <div className={styles.field}>
                <Form.Input label={'Введите название'} width={7}/>
            </div>
            <Form.Button size={'big'} className={styles.button}>Отправить</Form.Button>
        </Form>
  )
}
