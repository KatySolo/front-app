import React from 'react'
import { EmployeeForm } from '../../components/EmployeeForm'
import { Screen } from '../../components/Screen'

export const AddEmployeeView: React.FC = () => {
  return (
      <Screen title={'Добавление сотрудника'}>
            <EmployeeForm />
      </Screen>
  )
}
