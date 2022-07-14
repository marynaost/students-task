import { createReducer } from '@reduxjs/toolkit'
import { changeFilter } from './students-actions'

export const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})
