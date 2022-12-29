import React from 'react'
import { Form } from 'semantic-ui-react'
import { classNames } from '../../App'
import commonStyles from '../../App.module.css'
import styles from './AccessFormView.module.css'

export const AccessFormView: React.FC = () => {
  const [value, setValue] = React.useState('this')
  const handleChange = (item: string): void => setValue(item)

  const countryOptions = [
    { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
    { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },
    { key: 'al', value: 'al', flag: 'al', text: 'Albania' },
    { key: 'dz', value: 'dz', flag: 'dz', text: 'Algeria' },
    { key: 'as', value: 'as', flag: 'as', text: 'American Samoa' },
    { key: 'ad', value: 'ad', flag: 'ad', text: 'Andorra' },
    { key: 'ao', value: 'ao', flag: 'ao', text: 'Angola' },
    { key: 'ai', value: 'ai', flag: 'ai', text: 'Anguilla' },
    { key: 'ag', value: 'ag', flag: 'ag', text: 'Antigua' },
    { key: 'ar', value: 'ar', flag: 'ar', text: 'Argentina' },
    { key: 'am', value: 'am', flag: 'am', text: 'Armenia' },
    { key: 'aw', value: 'aw', flag: 'aw', text: 'Aruba' },
    { key: 'au', value: 'au', flag: 'au', text: 'Australia' },
    { key: 'at', value: 'at', flag: 'at', text: 'Austria' },
    { key: 'az', value: 'az', flag: 'az', text: 'Azerbaijan' },
    { key: 'bs', value: 'bs', flag: 'bs', text: 'Bahamas' },
    { key: 'bh', value: 'bh', flag: 'bh', text: 'Bahrain' },
    { key: 'bd', value: 'bd', flag: 'bd', text: 'Bangladesh' },
    { key: 'bb', value: 'bb', flag: 'bb', text: 'Barbados' },
    { key: 'by', value: 'by', flag: 'by', text: 'Belarus' },
    { key: 'be', value: 'be', flag: 'be', text: 'Belgium' },
    { key: 'bz', value: 'bz', flag: 'bz', text: 'Belize' },
    { key: 'bj', value: 'bj', flag: 'bj', text: 'Benin' }
  ]

  return (
      <div className={commonStyles.container}>
        <div className={commonStyles.title}>Добавление отметки</div>
          <Form className={styles.form} size={'huge'}>
              <div className={classNames(styles.dropdown, styles.field)}>
                  <Form.Dropdown className={classNames(styles.dropdown, styles.field)}
                             label={'Введите имя сотрудника'}
                             placeholder='Имя'
                             fluid
                             search
                             selection
                             options={countryOptions}/>
              </div>
              <Form.Group inline className={classNames(styles.radioGroup, styles.field)}>
                  <label className={styles.label}>Тип отметки</label>
                  <Form.Radio
                      label='Вход'
                      value='enter'
                      checked={value === 'enter'}
                      onChange={() => handleChange('enter')}
                  />
                  <Form.Radio
                      label='Выход'
                      value='exit'
                      checked={value === 'exit'}
                      onChange={() => handleChange('exit')}
                  />
              </Form.Group>
              <Form.Button size={'big'} className={styles.button}>Отправить</Form.Button>
          </Form>
      </div>
  )
}
