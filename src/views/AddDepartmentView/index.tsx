import React from 'react'
import { Form } from 'semantic-ui-react'
import styles from './AddDepartmentView.module.css'

export const AddDepartmentView: React.FC = () => {
  return (
        <div className={styles.container}>
            <div className={styles.title}>Добавление подразделения</div>
            <Form className={styles.form} size={'huge'}>
                <div className={styles.field}>
                    <Form.Input label={'Введите название'} width={7}/>
                </div>
                <Form.Button size={'big'} className={styles.button}>Отправить</Form.Button>
            </Form>
        </div>
  )
}
