import React from 'react'
import { DepartmentForm } from '../../components/DepartmentForm'
import { Screen } from '../../components/Screen'

export const AddDepartmentView: React.FC = () => {
  return (
      <Screen title={'Добавление подразделения'}>
           <DepartmentForm />
      </Screen>
  )
}
