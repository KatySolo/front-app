import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'
import formReducer from './reducers/form'

const rootReducer = combineReducers({
  form: formReducer
})

export const store = configureStore({
  reducer: rootReducer
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
ReturnType,
RootState,
unknown,
Action<string>
>
